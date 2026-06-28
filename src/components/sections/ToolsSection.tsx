import { motion } from 'framer-motion';

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

export function ToolsSection() {
  return (
    <section
      id="cong-cu"
      className="relative min-h-screen flex items-center px-4 overflow-hidden border-t-4 border-border-brown"
      style={{
        background: 'linear-gradient(180deg, #F0D7AB 0%, #FBE8C2 50%, #DEBA8A 100%)',
      }}
    >
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
    </section>
  );
}
