import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RibbonTitleProps {
  children: ReactNode;
  variant?: 'green' | 'red';
  className?: string;
}

export function RibbonTitle({ children, variant = 'green', className = '' }: RibbonTitleProps) {
  const variantClasses = {
    green: 'bg-moss text-gold-light',
    red: 'bg-burgundy text-gold-light',
  };

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center px-8 py-3 font-display font-semibold ${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0, y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Left Fold */}
      <div
        className="absolute -left-4 top-0 w-4 h-full"
        style={{
          background: variant === 'green' ? 'linear-gradient(135deg, #162e23 0%, #1F3B2E 100%)' : 'linear-gradient(135deg, #3E0808 0%, #5B0F0F 100%)',
          clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
        }}
      />

      {/* Right Fold */}
      <div
        className="absolute -right-4 top-0 w-4 h-full"
        style={{
          background: variant === 'green' ? 'linear-gradient(135deg, #1F3B2E 0%, #162e23 100%)' : 'linear-gradient(135deg, #5B0F0F 0%, #3E0808 100%)',
          clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
        }}
      />

      {/* Content */}
      <span className="relative z-10 text-sm md:text-base uppercase tracking-wider">
        {children}
      </span>
    </motion.div>
  );
}
