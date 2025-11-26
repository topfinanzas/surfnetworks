import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon,
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform";
  
  const variants = {
    primary: "bg-surf-crest text-white hover:bg-surf-foam hover:text-surf-deep shadow-lg hover:shadow-xl hover:shadow-surf-crest/30",
    outline: "border-2 border-surf-crest text-surf-crest hover:bg-surf-crest hover:text-white",
    white: "bg-white text-surf-deep hover:bg-surf-foam shadow-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </span>
    </motion.button>
  );
};