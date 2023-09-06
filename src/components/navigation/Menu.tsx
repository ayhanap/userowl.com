import type { Placement } from '@floating-ui/react';
import {
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDelayGroup,
  useDelayGroupContext,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import { AnimatePresence, MotionProps, Transition, motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
import { UrlObject } from 'url';

interface MenuOptions {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function useMenu({
  initialOpen = false,
  placement = 'top',
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: MenuOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'start',
        padding: 5,
      }),
      shift({ padding: 5 }),
    ],
  });

  const { context } = data;

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
    handleClose: safePolygon({
      requireIntent: false,
      buffer: 5,
    }),
  });
  // const focus = useFocus(context, {
  //   enabled: controlledOpen == null,
  // });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'menu' }); // TODO: for tooltip change this

  const click = useClick(context, {
    // TODO: for tooltip make this parameterized
    ignoreMouse: true,
  });

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const listRef = React.useRef<Array<HTMLAnchorElement | null>>([]);

  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    // This is a large list, allow looping.
    loop: true,
    focusItemOnHover: false,
    focusItemOnOpen: false,
  });

  const interactions = useInteractions([hover, dismiss, role, click, listNav]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      activeIndex,
      listRef,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data],
  );
}

type ContextType = ReturnType<typeof useMenu> | null;

const MenuContext = React.createContext<ContextType>(null);

export const useMenuContext = () => {
  const context = React.useContext(MenuContext);

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />');
  }

  return context;
};

export function Menu({ children, ...options }: { children: React.ReactNode } & MenuOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const menu = useMenu(options);
  return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>;
}

export const MenuTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & { asChild?: boolean }
  // eslint-disable-next-line prefer-arrow-callback
>(function MenuTrigger({ children, asChild = false, ...props }, propRef) {
  const context = useMenuContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      }),
    );
  }

  return (
    <button
      ref={ref}
      // The user can style the trigger based on the state
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  );
});

interface MenuContentOptions {
  motionProps?: MotionProps;

  transitionFn?: (
    delay:
      | number
      | Partial<{
          open: number;
          close: number;
        }>,
  ) => Transition;
}

export const MenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement> & MenuContentOptions
  // eslint-disable-next-line prefer-arrow-callback
>(function MenuContent({ style, motionProps, transitionFn, ...props }, propRef) {
  const context = useMenuContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);
  const { delay, setCurrentId } = useDelayGroupContext();

  useDelayGroup(context.context, {
    id: props.children,
  });

  if (!context.open) return null;

  let transition: Transition =
    // When in "grouped phase", make the transition faster
    // The open delay becomes 1ms during this phase.
    typeof delay === 'object' && delay.open === 1
      ? { duration: 0.08 }
      : { type: 'spring', damping: 20, stiffness: 300 };

  transition = transitionFn ? transitionFn(delay) : transition;

  return (
    <FloatingList elementsRef={context.listRef}>
      <FloatingPortal>
        <FloatingFocusManager
          context={context.context}
          modal={false}
          guards={false}
          initialFocus={-1}
        >
          <AnimatePresence>
            {context.open && (
              <motion.div
                initial={motionProps?.initial || { opacity: 0, scale: 2 }}
                animate={motionProps?.animate || { opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
                ref={ref}
                // style={{
                //   ...context.floatingStyles,
                //   ...style,
                // }}

                style={{
                  position: context.strategy,
                  top: context.y ?? 0,
                  left: context.x ?? 0,
                  visibility: context.x == null ? 'hidden' : 'visible',
                  ...style,
                }}
                {...context.getFloatingProps(props)}
              />
            )}
          </AnimatePresence>
        </FloatingFocusManager>
      </FloatingPortal>
    </FloatingList>
  );
});

interface MenuItemProps {
  label: string;
  href: string | UrlObject;
}

export const MenuItem = React.forwardRef<
  HTMLAnchorElement,
  MenuItemProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof MenuItemProps>
>(({ label, href, ...props }, forwardedRef) => {
  const context = useMenuContext();
  const item = useListItem({ label });
  const isActive = item.index === context.activeIndex;

  return (
    <Link
      href={href}
      {...props}
      ref={useMergeRefs([item.ref, forwardedRef])}
      role="menuitem"
      tabIndex={isActive ? 0 : -1}
      className="border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0"
      // disabled={disabled}
      {...context.getItemProps(props)}
    />
  );
});

MenuItem.displayName = 'SidebarMenu';
