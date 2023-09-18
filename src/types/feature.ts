export type Feature = {
  name: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
};
