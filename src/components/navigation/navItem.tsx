export default interface NavItem {
  name: string;
  description?: string;
  href: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  selectedOnChild?: boolean;
  prefetch?: boolean;
  children?: NavItem[];
  visible?: boolean;
}
