import { motion } from 'framer-motion';
import { OrnamentalSectionTitle, VintagePanel, NumberMedallion, RibbonTitle, FramedHistoricalImage } from '../ui';
import { content } from '../../data/content';

export function TuTuongVanHoaSection() {
  const data = content.tuTuongVanHoa;

  return (
    <section
      className="py-16 md:py-24 px-4 relative"
      style={{
        background: 'linear-gradient(180deg, #FBE8C2 0%, #F0D7AB 50%, #DEBA8A 100%)',
      }}
      id="tu-tuong-van-hoa"
    >
      <div className="container mx-auto max-w-6xl">
        <OrnamentalSectionTitle label={data.label} title={data.title} />

        {/* Intro */}
        <motion.p
          className="text-ink-dark font-body text-base md:text-lg text-center leading-relaxed max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {data.intro}
        </motion.p>

        {/* Ribbon */}
        <div className="text-center mb-10">
          <RibbonTitle variant="green">Nhiệm vụ cơ bản</RibbonTitle>
        </div>

        {/* 6 Mission Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.nhiemVu.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <VintagePanel delay={index * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <NumberMedallion number={index + 1} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-display font-bold text-burgundy mb-3">
                      {item.title}
                    </h4>
                    <p className="text-ink-dark font-body text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </VintagePanel>
            </motion.div>
          ))}
        </div>

        {/* Highlight Box */}
        <motion.div
          className="border-4 border-gold-antique bg-paper-light p-6 md:p-8 text-center mb-12"
          style={{
            boxShadow: 'inset 0 0 0 3px #C9A35A, inset 0 0 0 6px #FBE8C2',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-ink-dark font-body text-base md:text-lg leading-relaxed italic">
            {data.highlight}
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <FramedHistoricalImage
          placeholderText="[Chèn ảnh infographic: Nhiệm vụ trên lĩnh vực tư tưởng – văn hóa]"
          alt="Infographic tư tưởng văn hóa"
          aspectRatio="wide"
          className="max-w-4xl mx-auto"
          src="/images/nhiem_vu_tren_linh_vuc_tu_tuong_van_hoa.jpg"
        />
      </div>
    </section>
  );
}
