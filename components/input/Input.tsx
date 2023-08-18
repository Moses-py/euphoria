import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  label?: string;
  required: boolean;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  onchange?: () => void;
  classname?: string;
  variant: Variant;
}

type Variant = "textarea" | "input";

const Input = ({
  label,
  required,
  placeholder,
  type,
  onchange,
  classname,
  variant,
}: InputProps) => {
  return (
    <>
      <div className="flex flex-col gap-1 font-sans text-primary">
        <label htmlFor={label} className="font-semibold text-sm">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
        {variant === "input" && (
          <input
            type={type}
            required={required}
            placeholder={placeholder}
            onChange={onchange}
            className={`${classname} p-3 ring-1 ring-gray-3 rounded-md focus:ring-1 focus:ring-gray-2 outline-none bg-light placeholder:text-gray-2 placeholder:text-sm w-full`}
          />
        )}
        {variant === "textarea" && (
          <>
            <textarea
              required={required}
              placeholder={placeholder}
              onChange={onchange}
              className={`${classname} p-3 ring-1 ring-gray-3 rounded-md focus:ring-1 focus:ring-gray-2 outline-none bg-light placeholder:text-gray-2 w-full`}
              rows={5}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Input;
