import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
  icon?: React.ReactNode;
  classname?: string;
  type: ButtonType;
  onclick?: () => void;
};
type ButtonType = "submit" | "button" | "reset";
type ButtonVariant = "outline" | "filled";
type ButtonSize = "sm" | "lg";
const Button = ({
  children,
  variant,
  size = "sm",
  icon,
  classname,
  type,
  onclick,
}: ButtonProps) => {
  return (
    // todo: Optimize button flex alignment when icon is provided
    <button
      onClick={onclick}
      type={type}
      className={`
        ${classname}
        ${
          variant === "filled"
            ? "bg-button-primary-enabled text-white"
            : "ring-0 ring-primary border border-primary bg-white text-primary hover:text-white"
        }
        ${size === "sm" ? "w-fit" : "w-full"}
        ${icon && "flex gap-2 items-center justify-center"} 
        rounded-lg px-[20px] py-[10px] text-md font-sans font-semibold hover:bg-button-primary-focused-hover focus:bg-button-primary-focused-hover disabled:bg-button-primary-disabled
    `}
    >
      {icon} {children}
    </button>
  );
};

export default Button;
