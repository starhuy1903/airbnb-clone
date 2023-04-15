"use client";

import { IconType } from "react-icons";
import { cva } from "class-variance-authority";

const button = cva(
  [
    "relative",
    "disabled:opacity-70",
    "disabled:cursor-not-allowed",
    "rounded-lg",
    "hover:opacity-80",
    "transition",
    "w-full",
  ],
  {
    variants: {
      outline: {
        true: ["bg-white", "border-black", "text-black"],
        false: ["bg-rose-500", "border-rose-500", "text-white"],
      },
      small: {
        true: ["py-1 text-sm font-light border-[1px]"],
        false: ["py-3 text-md font-semibold border-2"],
      },
    },
  }
);

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline = false,
  small = false,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={button({ outline, small })}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
