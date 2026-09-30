import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    const baseStyle =
      "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-5 rounded-[var(--radius-control)]";
    
    const variants = {
      primary:
        "bg-[var(--accent-strong)] text-white hover:bg-[var(--accent-hover)]",
      secondary:
        "border border-[var(--line)] bg-transparent hover:bg-[var(--surface-alt)] text-[var(--ink)]",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyle} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
