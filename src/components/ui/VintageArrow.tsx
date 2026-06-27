import { motion } from 'framer-motion';

interface VintageArrowProps {
  direction?: 'left' | 'right' | 'up' | 'down';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function VintageArrow({ direction = 'right', size = 'md', className = '' }: VintageArrowProps) {
  const sizeValue = { sm: 16, md: 24, lg: 40 }[size];
  const sizeClasses = { sm: 'w-6 h-6', md: 'w-8 h-8', lg: 'w-12 h-12' }[size];

  const rotations = {
    left: 180,
    right: 0,
    up: -90,
    down: 90,
  };

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${sizeClasses} ${className}`}
      initial={{ opacity: 0, x: direction === 'left' ? 10 : direction === 'right' ? -10 : 0, y: direction === 'up' ? 10 : direction === 'down' ? -10 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width={sizeValue}
        height={sizeValue}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotations[direction]}deg)` }}
      >
        <path
          d="M8 20H32M32 20L24 12M32 20L24 28"
          stroke="#51341D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
