import React from 'react';
import { motion } from 'framer-motion';
import type { CardProps } from '../../types';
import { cardHover } from '../../utils/animations';

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const baseClasses = `bg-white rounded-xl shadow-soft border border-gray-100 transition-all duration-300 ${paddingClasses[padding]}`;

  if (hover) {
    return (
      <motion.div
        className={`${baseClasses} ${className}`}
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
};
