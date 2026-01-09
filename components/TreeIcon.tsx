import React from 'react';

interface TreeIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const TreeIcon: React.FC<TreeIconProps> = ({ className = '', size = 24, color = "currentColor" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22v-9" />
      <path d="M12 13c0-3-2-5-5-5a4 4 0 1 1 5.3 7.5" />
      <path d="M12 13c0-3 2-5 5-5a4 4 0 1 0-5.3 7.5" />
      <path d="M12 22s-4 0-6-3" />
      <path d="M12 22s4 0 6-3" />
    </svg>
  );
};
