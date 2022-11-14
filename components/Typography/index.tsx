interface TypographyProps extends React.HTMLProps<any> {
  children: any;
  onClick?: () => void;
}

export function Typography({ children, ...props }: TypographyProps) {
  return <div {...props}>{children}</div>;
}
