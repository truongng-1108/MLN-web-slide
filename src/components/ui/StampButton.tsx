import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

interface StampButtonProps {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
  href?: string;
  className?: string;
}

export function StampButton({ children, onClick, to, href, className = '' }: StampButtonProps) {
  const baseClasses = `stamp-button text-gold-light hover:text-gold-light focus-vintage ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        smooth
        duration={800}
        className={baseClasses}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
