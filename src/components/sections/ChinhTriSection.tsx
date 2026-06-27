import { motion } from 'framer-motion';
import { OrnamentalSectionTitle, VintagePanel, FramedHistoricalImage, VintageArrow } from '../ui';
import { content } from '../../data/content';

export function ChinhTriSection() {
  const data = content.chinhTri;

  return (
    <section
      className="py-16 md:py-24 px-4 relative border-t-4 border-b-4 border-border-brown"
      style={{
        background: 'linear-gradient(180deg, #DEBA8A 0%, #F0D7AB 50%, #FBE8C2 100%)',
      }}
      id="chinh-tri"
    >
      <div className="container mx-auto max-w-6xl">
        <OrnamentalSectionTitle label={data.label} title={data.title} />

        {/* Main Content */}
        <motion.div
          className="vintage-border bg-paper-light p-6 md:p-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-ink-dark font-body text-base md:text-lg leading-relaxed">
            {data.content}
          </p>
        </motion.div>

        {/* Poster Layout: Trước/Sau */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-2 mb-12">
          {/* Left Panel */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <VintagePanel className="h-full">
              <h4 className="text-xl md:text-2xl font-display font-bold text-burgundy text-center mb-6">
                Trước khi giành chính quyền
              </h4>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-burgundy/20 border-4 border-burgundy flex items-center justify-center">
                  <span className="text-burgundy text-3xl">⚔</span>
                </div>
              </div>
              <p className="text-ink-dark font-body text-base leading-relaxed text-center">
                {data.truocKhiGianhChinhQuyen}
              </p>
            </VintagePanel>
          </motion.div>

          {/* Center Arrow */}
          <div className="flex items-center justify-center">
            <div className="lg:flex-col items-center">
              <VintageArrow direction="right" className="lg:hidden" />
              <VintageArrow direction="down" className="hidden lg:block" />
              <motion.div
                className="bg-burgundy text-gold-light font-display font-bold text-lg md:text-xl px-6 py-3 text-center whitespace-nowrap"
                style={{
                  borderBottom: '4px solid #C9A35A',
                  boxShadow: '0 4px 12px rgba(72, 45, 20, 0.3)',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                GIÀNH CHÍNH QUYỀN
              </motion.div>
            </div>
          </div>

          {/* Right Panel */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <VintagePanel className="h-full">
              <h4 className="text-xl md:text-2xl font-display font-bold text-burgundy text-center mb-6">
                Sau khi giành chính quyền
              </h4>
              <ul className="space-y-3">
                {data.sauKhiGianhChinhQuyen.map((task, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="medallion w-7 h-7 text-sm flex-shrink-0">{index + 1}</span>
                    <span className="text-ink-dark font-body text-sm md:text-base">{task}</span>
                  </motion.li>
                ))}
              </ul>
            </VintagePanel>
          </motion.div>
        </div>

        {/* Image Placeholder */}
        <FramedHistoricalImage
          placeholderText="[Chèn ảnh infographic: trước/sau khi giành chính quyền]"
          alt="Infographic lĩnh vực chính trị"
          aspectRatio="wide"
          className="max-w-4xl mx-auto"
          src="/images/linh_vuc_tu_tuong_van_hoa.jpg"
        />
      </div>
    </section>
  );
}
