import { motion } from 'framer-motion';
import { OrnamentalSectionTitle, FramedHistoricalImage } from '../ui';
import { content } from '../../data/content';

export function KetLuanSection() {
  const data = content.ketLuan;

  return (
    <section
      className="py-16 md:py-24 px-4 relative"
      style={{
        background: 'linear-gradient(180deg, #FBE8C2 0%, #F0D7AB 50%, #DEBA8A 100%)',
      }}
      id="ket-luan"
    >
      <div className="container mx-auto max-w-5xl">
        <OrnamentalSectionTitle label={data.label} title={data.title} />

        {/* Main Content Box */}
        <motion.div
          className="vintage-border bg-paper-light p-8 md:p-12 mb-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Corner Decorations */}
          <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-gold-antique opacity-50" />
          <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-gold-antique opacity-50" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-gold-antique opacity-50" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-gold-antique opacity-50" />

          <p className="text-ink-dark font-body text-base md:text-lg leading-relaxed relative z-10">
            {data.content}
          </p>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          className="bg-burgundy border-4 border-gold-antique p-6 md:p-8 text-center mb-8"
          style={{
            boxShadow: 'inset 0 0 0 3px #3E0808, 0 6px 20px rgba(72, 45, 20, 0.4)',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <blockquote className="relative">
            <p className="text-gold-light font-display text-lg md:text-xl lg:text-2xl italic leading-relaxed">
              "{data.quote}"
            </p>
          </blockquote>
        </motion.div>

        {/* Image Placeholder */}
        <FramedHistoricalImage
          placeholderText="[Chèn ảnh kết luận / poster tổng hợp]"
          alt="Poster kết luận"
          aspectRatio="landscape"
          className="max-w-4xl mx-auto"
          src="/images/tongket.png"
        />
      </div>
    </section>
  );
}
