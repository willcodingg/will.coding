interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  onClick?: () => void;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-brand p-2 pr-8 pl-8 text-dark font-poppins rounded-lg hover:bg-brand-hover 
    transition ease-in duration-200 text-center"
    >
      {children}
    </button>
  );
}
