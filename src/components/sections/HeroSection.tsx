import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { QuoteBox, FramedHistoricalImage, StampButton } from '../ui';

export function HeroSection() {
  return (
    <>
      {/* Full-screen cover image */}
      <section id="trang-chu" className="relative h-screen w-full overflow-hidden border-b-4 border-border-brown">
        <img
          src="/images/trang_chu.jpg"
          alt="Thời kỳ quá độ lên chủ nghĩa xã hội"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Subtle gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-dark/30 via-transparent to-ink-dark/50" />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-paper-light"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="font-display text-sm tracking-[0.25em] uppercase drop-shadow-lg">
            Cuộn xuống
          </span>
          <motion.div
            className="mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-7 w-7 drop-shadow-lg" />
          </motion.div>
        </motion.div>
      </section>

      <MembersSection />

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
              src="/images/nam_hinh_thai_kinh_te.jpg"
              className="border-none p-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}

const members = [
  { name: 'Phạm Yến Nhi', id: 'SS181145' },
  { name: 'Nguyễn Ngọc Uyên Khanh', id: 'SS180023' },
  { name: 'Trần Tô Thái Hà', id: 'SS180950' },
  { name: 'Trần Hoàng Quân', id: 'SS181098' },
  { name: 'Ngô Phùng Anh Duy', id: 'SS180833' },
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[parts.length - 2]?.[0] ?? '') + (parts[parts.length - 1]?.[0] ?? '');
}

function MembersSection() {
  return (
    <section
      className="relative overflow-hidden border-b-4 border-border-brown py-16 md:py-24 px-4"
      style={{
        background: 'linear-gradient(180deg, #F0D7AB 0%, #FBE8C2 50%, #F0D7AB 100%)',
      }}
      id="thanh-vien"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block tracking-[0.35em] text-xs md:text-sm font-display font-semibold text-gold-dark uppercase">
            Our Team
          </span>
        </motion.div>
        <motion.h2
          className="text-center text-3xl md:text-5xl font-display font-bold text-burgundy mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Thành viên thực hiện
        </motion.h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="w-16 md:w-28 h-px bg-gold-antique/60" />
          <div className="w-3 h-3 rotate-45 bg-gold-antique/70" />
          <div className="w-16 md:w-28 h-px bg-gold-antique/60" />
        </div>

        {/* Member cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {members.map((m, i) => (
            <motion.div
              key={m.id}
              className="group w-full max-w-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <div
                className="h-full bg-paper-light border-4 border-gold-antique p-7 text-center flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-2"
                style={{
                  boxShadow: 'inset 0 0 0 3px #FBE8C2, 0 10px 28px rgba(72, 45, 20, 0.18)',
                }}
              >
                {/* Avatar medallion */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5 border-2 border-gold-antique"
                  style={{
                    background: 'linear-gradient(135deg, #5B0F0F 0%, #7A1B16 50%, #5B0F0F 100%)',
                    boxShadow: 'inset 0 0 0 3px #3E0808',
                  }}
                >
                  <span className="text-gold-light text-2xl font-display font-bold uppercase">
                    {initials(m.name)}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-burgundy mb-2">
                  {m.name}
                </h3>
                <span className="inline-block px-4 py-1 text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-dark bg-paper-muted/50 border border-gold-antique">
                  {m.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
