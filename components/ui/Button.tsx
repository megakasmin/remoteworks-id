import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle = `
    inline-flex items-center justify-center
    px-4 py-2 rounded-lg text-sm font-medium
    transition
    hover:opacity-90
    active:scale-95
    disabled:opacity-50
    disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-blue-500
  `;

  const variantStyle =
    variant === "primary"
      ? "bg-blue-600 text-white"
      : "bg-gray-200 text-gray-800";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
