import { motion } from 'framer-motion';
import { OrnamentalSectionTitle, VintagePanel, FramedHistoricalImage } from '../ui';
import { content } from '../../data/content';

export function TinhTatYeuSection() {
  const data = content.tinhTatYeu;

  return (
    <section
      className="py-16 md:py-24 px-4 relative"
      style={{
        background: 'linear-gradient(180deg, #FBE8C2 0%, #F0D7AB 50%, #DEBA8A 100%)',
      }}
      id="tinh-tat-yeu"
    >
      <div className="container mx-auto max-w-6xl">
        <OrnamentalSectionTitle label={data.label} title={data.title} />

        {/* Main Content */}
        <motion.div
          className="vintage-border bg-paper-light p-6 md:p-10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-ink-dark font-body text-base md:text-lg leading-relaxed">
            {data.content}
          </p>
        </motion.div>
        <div className="mt-12">
          <FramedHistoricalImage
            src="/images/phan2.jpg"
            placeholderText="[Chèn ảnh/sơ đồ: Quá độ trực tiếp và quá độ gián tiếp]"
            alt="Sơ đồ hai hình thức quá độ"
            aspectRatio="landscape"
          />
        </div>

        {/* Subsection Title */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-burgundy">
            {data.subsection}
          </h3>
        </div>

        {/* Two Forms Poster Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {data.haiHinhThucQuaDo.map((item, index) => (
            <VintagePanel key={index} delay={index * 0.1}>
              <div className="relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="medallion w-14 h-14 text-xl">
                    {index + 1}
                  </div>
                </div>
                <div className="pt-6">
                  <h4 className="text-xl md:text-2xl font-display font-bold text-burgundy text-center mb-4">
                    {item.title}
                  </h4>
                  <p className="text-ink-dark font-body text-base leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </VintagePanel>
          ))}
        </div>

          {/* Highlight Box */}
        <motion.div
          className="border-4 border-gold-antique bg-paper-light p-6 md:p-8 text-center mt-12"
          style={{
            boxShadow: 'inset 0 0 0 3px #C9A35A, inset 0 0 0 6px #FBE8C2',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-ink-dark font-body text-base md:text-lg leading-relaxed italic">
            Vận dụng, phát triển sáng tạo những lý của chủ nghĩa Mác- Lênin, trong thời đại ngày nay, chúng ta có thể khẳng định: Trong bối cảnh toàn cầu hóa và cách mạng công nghiệp 4.0, dưới sự lãnh đạo của Đảng Cộng sản có thể tiến thẳng lên chủ nghĩa xã hội chủ nghĩa bỏ qua chế độ tư bản chủ nghĩa.
          </p>
        </motion.div>

          <div className="mt-12">
          <FramedHistoricalImage
            src="/images/quan_triet_va_van_dung.jpg"
            placeholderText="[Chèn ảnh/sơ đồ: Quá độ trực tiếp và quá độ gián tiếp]"
            alt="Sơ đồ hai hình thức quá độ"
            aspectRatio="landscape"
          />
        </div>

      </div>

    </section>
  );
}
