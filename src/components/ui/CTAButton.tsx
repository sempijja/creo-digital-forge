
import React from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
  className?: string;
}

const CTAButton = ({
  variant = "primary",
  size = "default",
  children,
  className,
  ...props
}: CTAButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        {
          "bg-creo-purple text-white shadow hover:bg-creo-light-purple": variant === "primary",
          "bg-creo-dark text-white shadow hover:bg-gray-800": variant === "secondary",
          "border border-input hover:bg-accent hover:text-accent-foreground": variant === "outline",
          "h-10 py-2 px-4": size === "default",
          "h-9 px-3": size === "sm",
          "h-12 px-6 text-base": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CTAButton;
