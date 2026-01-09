import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'light' | 'dark';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  onClick,
  variant = 'light'
}) => {
  const baseStyle = "backdrop-blur-md rounded-3xl border shadow-sm transition-all duration-300";
  
  // Adjusted opacity for legibility
  const variantStyles = variant === 'light' 
    ? "bg-ivory/80 border-white/40 shadow-olive-dark/5 text-olive-slate" 
    : "bg-olive-slate/60 border-white/10 shadow-black/20 text-ivory";

  return (
    <div 
      className={`${baseStyle} ${variantStyles} ${className} ${onClick ? 'cursor-pointer active:scale-95' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
