import React, { ReactNode } from "react";

interface ButtonProps {
  label: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  className?: string;
  contentEditable?: boolean; // optional if you want editable text
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  contentEditable = false,
}) => {
  const baseStyles =
    "px-6 py-2 my-2 cursor-pointer transition-all duration-200";
  const variants = {
    primary: "bg-[#E50000] text-sm text-white hover:bg-[#C40000]",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      contentEditable={contentEditable}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
