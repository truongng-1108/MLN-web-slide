import { motion } from 'framer-motion';
import { QuoteBox, FramedHistoricalImage, StampButton } from '../ui';

export function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-12 md:py-20 relative overflow-hidden border-b-4 border-border-brown"
      style={{
        background: 'linear-gradient(180deg, #F0D7AB 0%, #DEBA8A 50%, #F0D7AB 100%)',
      }}
    >
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-6 border-l-6 border-burgundy opacity-40" />
      <div className="absolute top-0 right-0 w-24 h-24 border-t-6 border-r-6 border-burgundy opacity-40" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-6 border-l-6 border-burgundy opacity-40" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-6 border-r-6 border-burgundy opacity-40" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content Left */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small Label */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1 text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-dark bg-paper-light/50 border border-gold-antique">
                MARXISM – LENINISM EXHIBITION
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-burgundy text-center lg:text-left leading-tight">
              THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
            </h1>

            {/* Ribbon */}
            <div className="flex justify-center lg:justify-start">
              <div className="ribbon">
                <span className="text-sm md:text-base font-display">Theo quan điểm của chủ nghĩa Mác – Lênin</span>
              </div>
            </div>

            {/* Intro Text */}
            <p className="text-ink-dark font-body text-base md:text-lg text-center lg:text-left leading-relaxed bg-paper-light/30 p-6 vintage-border">
              Thời kỳ quá độ lên chủ nghĩa xã hội là giai đoạn chuyển biến cách mạng từ xã hội cũ sang xã hội mới. Đây là quá trình lâu dài, phức tạp, trong đó các yếu tố cũ và mới cùng tồn tại, đấu tranh và chuyển hóa.
            </p>

            {/* Quote Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <QuoteBox
                quote="Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ cải biến cách mạng từ xã hội này sang xã hội kia."
                author="C. Mác"
              />
              <QuoteBox
                quote="Giữa chủ nghĩa tư bản và chủ nghĩa cộng sản, có một thời kỳ quá độ nhất định."
                author="V.I. Lênin"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <StampButton to="tinh-tat-yeu">
                Khám phá nội dung
              </StampButton>
              <StampButton to="kinh-te" className="bg-burgundy-deep">
                Xem các lĩnh vực
              </StampButton>
            </div>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <FramedHistoricalImage
              placeholderText="[Chèn ảnh minh họa tổng quan Mác – Lênin / thời kỳ quá độ / poster CNXH]"
              alt="Minh họa thời kỳ quá độ lên chủ nghĩa xã hội"
              aspectRatio="portrait"
              src="/images/mobai.png"
              className="border-none p-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
