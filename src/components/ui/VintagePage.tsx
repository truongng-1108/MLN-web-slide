import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface VintagePageProps {
  children: ReactNode;
}

export function VintagePage({ children }: VintagePageProps) {
  return (
    <div className="vintage-paper min-h-screen relative">
      {/* Decorative Border */}
      <div className="fixed top-4 left-4 right-4 bottom-4 pointer-events-none z-0 border-4 border-border-brown opacity-20">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-burgundy opacity-60" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-burgundy opacity-60" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-burgundy opacity-60" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-burgundy opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="hidden md:inline-flex fixed bottom-8 right-8 medallion cursor-pointer z-50 hover:scale-110 transition-transform focus-vintage"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Về đầu trang"
      >
        ↑
      </motion.button>
    </div>
  );
}
