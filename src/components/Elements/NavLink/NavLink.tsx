import { NavLink } from "react-router-dom";

const variants = {
  main: "lg:text-5xl text-3xl md:text-4xl text-tertiary  h-full grid f font-medium  content-center transition-colors duration-300 font-Synonym dark:text-white",
  primary:
    "sm:text-xl text-md text-tertiary mx-3  h-full grid font-medium  content-center lg:px-4  transition-colors duration-300 dark:text-white active:border-b-2 active:border-b-black dark:active:border-b-white active:text-yellow-300",
  mobile: "text-2xl font-Synonym text-primary font-medium my-8 ml-4 my-7",
};
type NavLinkProps = {
  variant?: keyof typeof variants;
  to: string;
  children: React.ReactNode;
  className?: string;
};

export const Navlink = ({ variant, to, children, className }: NavLinkProps) => {
  return (
    <NavLink to={to} className={variants[variant!]}>
      {children}
    </NavLink>
  );
};