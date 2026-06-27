import { motion } from 'framer-motion';

interface OrnamentalSectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function OrnamentalSectionTitle({ label, title, subtitle }: OrnamentalSectionTitleProps) {
  return (
    <motion.div
      className="text-center mb-12 ornamental-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Small Label */}
      <div className="inline-block px-4 py-1 mb-4">
        <span className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-antique">
          {label}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-burgundy mb-3 px-4">
        {title}
      </h2>

      {/* Subtitle / Ribbon */}
      {subtitle && (
        <div className="mt-4">
          <div className="ribbon">
            <span className="text-sm md:text-base font-display">{subtitle}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
