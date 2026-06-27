import { motion } from 'framer-motion';
import { OrnamentalSectionTitle, VintagePanel, NumberMedallion, RibbonTitle, FramedHistoricalImage, VintageArrow } from '../ui';
import { content } from '../../data/content';

export function KinhTeSection() {
  const data = content.kinhTe;

  return (
    <section
      className="py-16 md:py-24 px-4 relative"
      style={{
        background: 'linear-gradient(180deg, #FBE8C2 0%, #F0D7AB 50%, #DEBA8A 100%)',
      }}
      id="kinh-te"
    >
      <div className="container mx-auto max-w-7xl">
        <OrnamentalSectionTitle label={data.label} title={data.title} />

        {/* Intro */}
        <motion.p
          className="text-ink-dark font-body text-base md:text-lg text-center leading-relaxed max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {data.intro}
        </motion.p>

        {/* 5 Column Infographic */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {data.thanhPhanKinhTe.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <VintagePanel className="h-full" delay={index * 0.1}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <NumberMedallion number={index + 1} size="lg" />
                  </div>
                  <h4 className="text-lg md:text-xl font-display font-bold text-burgundy mb-4 min-h-[56px]">
                    {item.title}
                  </h4>
                  <div className="mb-4">
                    <FramedHistoricalImage
                      placeholderText={`[Chèn minh họa: ${item.title}]`}
                      alt={item.title}
                      aspectRatio="square"
                      src={item.imageSrc}
                      className=""
                    />
                  </div>
                  <p className="text-ink-dark font-body text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </VintagePanel>

              {/* Arrow between items (desktop only) */}
              {index < 4 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 items-center justify-center">
                  <VintageArrow direction="right" size="sm" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Ribbon */}
        <div className="text-center mb-12">
          <RibbonTitle variant="red">
            Đặc điểm kinh tế của thời kỳ quá độ lên chủ nghĩa xã hội
          </RibbonTitle>
        </div>

        {/* Vì sao có nhiều thành phần */}
        <div className="vintage-border bg-paper-light p-6 md:p-10 mb-12">
          <h3 className="text-2xl font-display font-bold text-burgundy text-center mb-8">
            Vì sao có nhiều thành phần kinh tế?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.viSaoNhieuThanhPhan.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mt-1">
                  <NumberMedallion number={index + 1} size="sm" />
                </div>
                <p className="text-ink-dark font-body text-base leading-relaxed flex-1">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>  
      </div>
    </section>
  );
}
