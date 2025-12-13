"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden";

    const variants = {
      primary:
        "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:ring-gray-900 dark:focus-visible:ring-white shadow-sm hover:shadow-md",
      secondary:
        "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 shadow-sm hover:shadow-lg hover:shadow-primary-500/20",
      outline:
        "border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-gray-500",
      ghost:
        "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-gray-500",
    };

    const sizes = {
      sm: "px-4 py-2.5 text-sm gap-2",
      md: "px-6 py-3 text-sm gap-2",
      lg: "px-8 py-4 text-base gap-2.5",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...(props as any)}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-current/20 border-t-current rounded-full animate-spin" />
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
