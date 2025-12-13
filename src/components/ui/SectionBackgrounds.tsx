"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// ===== ABOUT SECTION - Simples e leve =====
export function AboutBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white/90 dark:bg-[#030712]/90" />
      
      {/* Gradient orb */}
      <div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] animate-float-slow"
        style={{
          background: isDark
            ? "rgba(59, 130, 246, 0.08)"
            : "rgba(59, 130, 246, 0.05)",
        }}
      />
      
      {/* Hexagon pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L52 17.5V42.5L30 55L8 42.5V17.5L30 5Z' fill='none' stroke='%23${isDark ? "ffffff" : "000000"}' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

// ===== SERVICES SECTION - Ondas CSS =====
export function ServicesBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/90 dark:bg-[#0a0a0f]/90" />

      {/* Static wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[30%]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill={isDark ? "rgba(59, 130, 246, 0.03)" : "rgba(59, 130, 246, 0.02)"}
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L0,320Z"
        />
      </svg>

      {/* Grid dots */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(${isDark ? "#3b82f6" : "#2563eb"} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Floating gradient */}
      <div
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px] animate-float-medium"
        style={{
          background: isDark
            ? "rgba(168, 85, 247, 0.06)"
            : "rgba(168, 85, 247, 0.03)",
        }}
      />
    </div>
  );
}

// ===== PORTFOLIO SECTION - Código visual =====
export function PortfolioBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/90 dark:bg-[#0a0a0f]/90" />

      {/* Gradient mesh */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 blur-[100px] opacity-30"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Diagonal lines - pure CSS */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            ${isDark ? "rgba(168, 85, 247, 0.5)" : "rgba(147, 51, 234, 0.3)"} 50px,
            ${isDark ? "rgba(168, 85, 247, 0.5)" : "rgba(147, 51, 234, 0.3)"} 51px
          )`,
        }}
      />
      
      {/* Bottom gradient */}
      <div
        className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] rounded-full blur-[120px] animate-float-fast"
        style={{
          background: isDark
            ? "rgba(59, 130, 246, 0.06)"
            : "rgba(59, 130, 246, 0.03)",
        }}
      />
    </div>
  );
}

// ===== TECHNOLOGIES SECTION - Circuit simples =====
export function TechnologiesBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white/90 dark:bg-[#030712]/90" />

      {/* Circuit pattern - pure CSS */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? "#06b6d4" : "#0891b2"} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? "#06b6d4" : "#0891b2"} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px] animate-float-slow"
        style={{
          background: isDark
            ? "rgba(6, 182, 212, 0.08)"
            : "rgba(6, 182, 212, 0.04)",
        }}
      />
      
      <div
        className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full blur-[120px] animate-float-medium"
        style={{
          background: isDark
            ? "rgba(59, 130, 246, 0.06)"
            : "rgba(59, 130, 246, 0.03)",
        }}
      />
    </div>
  );
}

// ===== CONTACT SECTION - Pulso simples =====
export function ContactBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/90 dark:bg-[#0a0a0f]/90" />

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] animate-pulse-slow"
        style={{
          background: isDark
            ? "rgba(16, 185, 129, 0.08)"
            : "rgba(16, 185, 129, 0.05)",
        }}
      />

      {/* Dotted pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(${isDark ? "#10b981" : "#059669"} 1.5px, transparent 1.5px)`,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Secondary glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] animate-float-medium"
        style={{
          background: isDark
            ? "rgba(16, 185, 129, 0.05)"
            : "rgba(16, 185, 129, 0.03)",
        }}
      />
    </div>
  );
}
