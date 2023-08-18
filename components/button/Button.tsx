import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
  icon?: React.ReactNode;
  classname?: string;
  type: ButtonType;
  onclick?: () => void;
  disabled?: boolean;
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
  disabled,
}: ButtonProps) => {
  return (
    // todo: Optimize button flex alignment when icon is provided
    <button
      onClick={onclick}
      disabled={disabled}
      type={type}
      className={`
        ${classname}
        ${
          variant === "filled"
            ? "bg-button-primary-enabled text-white"
            : "ring-0 ring-gray-2 border border-gray-2 bg-white text-primary hover:bg-gray-3 hover:text-primary active:bg-gray-3 focus:bg-gray-3"
        }
        ${size === "sm" ? "w-fit" : "w-full"}
        ${icon && "flex gap-2 items-center justify-center"} 
        rounded-lg px-[10px] py-[6px] text-md font-sans font-semibold hover:bg-button-primary-focused-hover focus:bg-button-primary-focused-hover disabled:bg-button-primary-disabled disabled:cursor-not-allowed
    `}
    >
      {icon} {children}
    </button>
  );
};

export default Button;
