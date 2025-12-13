"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "elevated" | "outlined" | "glass";
}

export function Card({
  children,
  className,
  hover = true,
  variant = "default",
}: CardProps) {
  const variants = {
    default:
      "bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800",
    elevated:
      "bg-white dark:bg-gray-900 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800",
    outlined:
      "bg-transparent border-2 border-gray-200 dark:border-gray-700",
    glass:
      "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl p-6 transition-shadow duration-300",
        variants[variant],
        hover && "hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("mb-5", className)}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({ children, className, as: Tag = "h3" }: CardTitleProps) {
  return (
    <Tag
      className={cn(
        "text-lg font-semibold text-gray-900 dark:text-white tracking-tight",
        className
      )}
    >
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-gray-500 dark:text-gray-400 text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("mt-4", className)}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn("mt-4 pt-4 border-t border-gray-200 dark:border-gray-800", className)}>{children}</div>;
}
