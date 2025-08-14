import React from "react";
import type { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary", disabled = false }) => {
  const baseStyle = "rounded-full px-4 py-2 text-sm font-medium focus:outline-none transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
