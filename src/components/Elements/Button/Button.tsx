const variants = {
  authSecondary:
    "text-xl font-pilcrow lg:w-5/12 w-full bg-primary text-tertiary p-3 transition-shadow duration-300 border-tertiary border hover:shadow-2xl shadow-black",
  authPrimary:
    "text-xl font-pilcrow lg:w-5/12 w-full bg-secondary text-white p-3  transition-shadow duration-300 border-tertiary border hover:shadow-2xl shadow-black mb-8 md:mb-0",
  pendingButton:
    "text-xl font-pilcrow lg:w-5/12 mx-3 md:mx-0 bg-secondary text-white p-3 md:mr-4 transition-shadow duration-300 border-tertiary border hover:shadow-2xl shadow-black mb-8 md:mb-0",
  authTertiary:
    "flex text-2xl items-center dark:border-white border-secondary border-2 focus:border-4 focus:border-secondary rounded-full text-white  transition-opacity duration-300  hover:opacity-80 mx-auto my-8",
  settingsButton:
    "text-xl font-pilcrow self-end w-full mt-8  md:mt-12 bottom-0 mx-auto bg-tertiary border border-primary text-primary p-1 py-2 transition-opacity duration-300 hover:opacity-80",
  draft:
    "border-2 border-tertiary dark:text-white bg-primary px-1 text-secondary md:text-xl text-md font-pilcrow dark:bg-tertiary dark:border-secondary",
  nav: "sm:text-xl text-md transition-colors duration-300 hover:text-secondary px-3 uppercase text-tertiary border-tertiary h-full grid font-medium  content-center lg:px-4 dark:text-white",
};

type ButtonProps = {
  text?: string;
  className?: string;
  variant?: keyof typeof variants;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: any;
  children?: React.ReactNode;
};

export function Button({
  text,
  className,
  handleClick,
  children,
  type,
  variant,
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={variants[variant!] + " " + className}
      data-testid="button"
      type={type}
    >
      {text && text} {children && children}
    </button>
  );
}
