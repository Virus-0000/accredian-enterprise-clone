import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary:
      "bg-[#1B76FF] text-white shadow-md shadow-blue-500/20 hover:bg-[#1565C0] hover:shadow-lg hover:shadow-blue-500/30",
    secondary:
      "bg-blue-50 text-[#1B76FF] hover:bg-blue-100/80 hover:text-blue-700",
    outline:
      "border border-gray-200 bg-white text-gray-800 hover:border-[#1B76FF] hover:text-[#1B76FF]",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-8 sm:px-9 py-3.5 text-base sm:text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
