import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface FramedHistoricalImageProps {
  placeholderText: string;
  caption?: string;
  alt?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'wide';
  className?: string;
  src?: string;
}

export function FramedHistoricalImage({
  placeholderText,
  caption,
  alt = 'Historical image',
  aspectRatio = 'landscape',
  className = '',
  src,
}: FramedHistoricalImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
    wide: 'aspect-[16/9]',
  };

  return (
    <>
      <motion.div
        className={`image-frame relative group cursor-pointer ${className}`}
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`${aspectClasses[aspectRatio]} bg-paper-muted flex items-center justify-center relative overflow-hidden`}>
          {src ? (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              {/* Decorative Frame Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full border-4 border-dashed border-border-brown m-4" />
              </div>

              {/* Placeholder Text */}
              <div className="relative z-10 bg-paper-light/80 px-4 py-2">
                <p className="text-ink-soft font-body text-sm md:text-base italic">
                  {placeholderText}
                </p>
              </div>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/10 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-paper-light/90 rounded-full p-3 shadow-lg">
              <ZoomIn className="w-6 h-6 text-burgundy" />
            </div>
          </div>
        </div>

        {/* Caption */}
        {caption && (
          <div className="mt-3 text-center">
            <p className="text-xs text-ink-soft italic">{caption}</p>
          </div>
        )}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-ink-dark/80 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              className="relative z-10 w-full max-w-5xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="vintage-border bg-paper-light p-4 md:p-6 relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-burgundy text-gold-light flex items-center justify-center hover:bg-burgundy-soft transition-colors focus-vintage z-20"
                  aria-label="Đóng"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image */}
                <div className="aspect-[16/9] bg-paper-muted flex items-center justify-center">
                  {src ? (
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <p className="text-ink-soft font-body italic">{placeholderText}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
