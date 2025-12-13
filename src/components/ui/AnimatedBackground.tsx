"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Static gradient orbs with CSS animations - No JS tracking */}
      <div 
        className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px] animate-float-slow"
        style={{ 
          background: isDark 
            ? "rgba(59, 130, 246, 0.1)" 
            : "rgba(59, 130, 246, 0.05)",
        }}
      />
      <div 
        className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] animate-float-medium"
        style={{ 
          background: isDark 
            ? "rgba(168, 85, 247, 0.08)" 
            : "rgba(168, 85, 247, 0.04)",
        }}
      />
      <div 
        className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full blur-[100px] animate-float-fast"
        style={{ 
          background: isDark 
            ? "rgba(6, 182, 212, 0.08)" 
            : "rgba(6, 182, 212, 0.04)",
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
