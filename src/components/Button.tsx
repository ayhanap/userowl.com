import clsx from 'clsx';
import Link from 'next/link';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-md py-2 px-4 text-sm focus:outline-none',
};

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 dark:text-slate-200 dark:hover:text-white text-slate-700 hover:text-slate-900 dark:hover:ring-white hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
};

type VariantKey = keyof typeof variantStyles;
type ColorKey<Variant extends VariantKey> = keyof (typeof variantStyles)[Variant];

type ButtonProps<Variant extends VariantKey, Color extends ColorKey<Variant>> = {
  variant?: Variant;
  color?: Color;
} & (
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
  | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
      href?: undefined;
    })
);

// eslint-disable-next-line import/prefer-default-export
export function Button<Color extends ColorKey<Variant>, Variant extends VariantKey = 'solid'>({
  variant,
  color,
  className,
  ...props
}: ButtonProps<Variant, Color>) {
  // eslint-disable-next-line no-param-reassign
  variant = variant ?? ('solid' as Variant);
  // eslint-disable-next-line no-param-reassign
  color = color ?? ('slate' as Color);

  // eslint-disable-next-line no-param-reassign
  className = clsx(baseStyles[variant], variantStyles[variant][color], className);

  return typeof props.href === 'undefined' ? (
    // @ts-ignore
    <button className={className} {...props} />
  ) : (
    // @ts-ignore
    <Link className={className} {...props} />
  );
}
