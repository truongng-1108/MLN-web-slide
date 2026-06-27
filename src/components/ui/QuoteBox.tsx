import { motion } from 'framer-motion';

interface QuoteBoxProps {
  quote: string;
  author: string;
  className?: string;
}

export function QuoteBox({ quote, author, className = '' }: QuoteBoxProps) {
  return (
    <motion.div
      className={`quote-box ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <blockquote className="relative z-10">
        <p className="text-ink-dark font-body text-base md:text-lg italic leading-relaxed mb-3">
          "{quote}"
        </p>
        <footer className="text-right">
          <cite className="text-gold-dark font-display font-semibold not-italic text-sm md:text-base">
            — {author}
          </cite>
        </footer>
      </blockquote>
    </motion.div>
  );
}
