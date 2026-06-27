import { motion } from 'framer-motion';

interface NumberMedallionProps {
  number: number | string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function NumberMedallion({ number, size = 'md', className = '' }: NumberMedallionProps) {
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-2xl',
  };

  return (
    <motion.div
      className={`medallion ${sizeClasses[size]} ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
    >
      {number}
    </motion.div>
  );
}
