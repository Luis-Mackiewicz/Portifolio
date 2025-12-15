import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export default function Button({
  children,
  active = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      {...props}
      className={clsx(
        " flex items-center justify-center gap-2 p-3 w-90  rounded-4xl transition-all cursor-pointer border border-terciary font-bold",

        active && "bg-terciary/20 text-foreground hover:bg-terciary",

        !active && "bg-transparent text-gray-500",

        disabled && "opacity-50 cursor-not-allowed",

        className
      )}
    >
      {children}
    </button>
  );
}
