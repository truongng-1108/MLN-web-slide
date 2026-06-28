import { motion } from 'framer-motion';
import { OrnamentalSectionTitle, VintagePanel, FramedHistoricalImage, VintageArrow } from '../ui';
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

      <ToolsShowcase />
    </section>
  );
}

const tools = [
  {
    name: 'bolt.new',
    glyph: '⚡',
    role: 'Khởi tạo & dựng giao diện',
    desc: 'Sinh nhanh khung dự án web, dựng layout và lặp giao diện tức thì.',
  },
  {
    name: 'ChatGPT',
    glyph: '✦',
    role: 'Soạn & hệ thống hóa nội dung',
    desc: 'Hỗ trợ biên tập, sắp xếp luận điểm và chuẩn hóa câu chữ học thuật.',
  },
  {
    name: 'Claude',
    glyph: '❋',
    role: 'Tinh chỉnh & hoàn thiện',
    desc: 'Rà soát mã nguồn, tinh chỉnh thiết kế và hoàn thiện sản phẩm cuối.',
  },
];

function ToolsShowcase() {
  return (
    <div className="relative mt-24 min-h-screen flex items-center px-4 overflow-hidden">
      {/* Background flourish */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #7A1B16 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-antique/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-antique/40 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 py-20">
        {/* Eyebrow */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block tracking-[0.35em] text-xs md:text-sm font-display font-semibold text-gold-dark uppercase">
            Behind The Scenes
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-center text-3xl md:text-5xl font-display font-bold text-burgundy mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Công cụ hỗ trợ thực hiện sản phẩm
        </motion.h3>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-16 md:w-28 h-px bg-gold-antique/60" />
          <div className="w-3 h-3 rotate-45 bg-gold-antique/70" />
          <div className="w-16 md:w-28 h-px bg-gold-antique/60" />
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
            >
              <div
                className="h-full bg-paper-light border-4 border-gold-antique p-8 text-center flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-2"
                style={{
                  boxShadow: 'inset 0 0 0 3px #FBE8C2, 0 10px 30px rgba(72, 45, 20, 0.18)',
                }}
              >
                {/* Glyph medallion */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 border-gold-antique"
                  style={{
                    background: 'linear-gradient(135deg, #5B0F0F 0%, #7A1B16 50%, #5B0F0F 100%)',
                    boxShadow: 'inset 0 0 0 3px #3E0808',
                  }}
                >
                  <span className="text-gold-light text-3xl font-display">{tool.glyph}</span>
                </div>

                {/* Index ribbon */}
                <span className="text-xs tracking-[0.3em] text-gold-dark font-display font-semibold mb-2">
                  0{i + 1}
                </span>

                <h4 className="text-2xl font-display font-bold text-burgundy mb-1">
                  {tool.name}
                </h4>
                <p className="text-sm font-display font-semibold text-gold-dark uppercase tracking-wide mb-4">
                  {tool.role}
                </p>
                <p className="text-ink-dark font-body text-base leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          className="text-center text-ink-soft font-body italic text-sm md:text-base mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Sản phẩm được xây dựng với sự đồng hành của các công cụ AI hiện đại.
        </motion.p>
      </div>
    </div>
  );
}
