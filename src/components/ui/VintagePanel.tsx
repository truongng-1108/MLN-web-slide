import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface VintagePanelProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export function VintagePanel({ children, className = '', onClick, delay = 0 }: VintagePanelProps) {
  return (
    <motion.div
      className={`vintage-border bg-paper-light p-6 relative ${onClick ? 'cursor-pointer' : ''} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      onClick={onClick}
    >
      {/* Corner Ornaments */}
      <div className="corner-ornament corner-ornament-tl" />
      <div className="corner-ornament corner-ornament-tr" />
      <div className="corner-ornament corner-ornament-bl" />
      <div className="corner-ornament corner-ornament-br" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
