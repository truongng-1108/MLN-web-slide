import { motion } from 'framer-motion';
import { OrnamentalSectionTitle, VintagePanel, FramedHistoricalImage } from '../ui';
import { content } from '../../data/content';

export function VietNamSection() {
  const data = content.vietNam;

  return (
    <section
      className="py-16 md:py-24 px-4 relative"
      style={{
        background: 'linear-gradient(180deg, #FBE8C2 0%, #F0D7AB 50%, #DEBA8A 100%)',
      }}
      id="viet-nam"
    >
      <div className="container mx-auto max-w-6xl">
        <OrnamentalSectionTitle
          label={data.label}
          title={data.title}
          subtitle={data.subtitle}
        />

        {/* Intro */}
        <motion.p
          className="text-ink-dark font-body text-base md:text-lg text-center leading-relaxed max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {data.intro}
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-burgundy/30 -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-10">
            {data.timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative md:grid md:grid-cols-[minmax(0,1fr)_6rem_minmax(0,1fr)] md:items-start md:gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {index % 2 === 1 && <div className="hidden md:block" />}

                {/* Year Stamp (desktop) */}
                <div className="hidden md:flex md:col-start-2 md:row-start-1 items-center justify-center z-10 pt-4">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-burgundy border-4 border-gold-antique flex items-center justify-center text-gold-light font-display font-bold"
                    style={{
                      boxShadow: 'inset 0 0 0 3px #3E0808, 0 4px 12px rgba(72, 45, 20, 0.3)',
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
                  >
                    <span className="text-sm md:text-base">{item.year}</span>
                  </motion.div>
                </div>

                {/* Content Panel */}
                <div className={index % 2 === 0 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-3 md:row-start-1'}>
                  <VintagePanel delay={index * 0.15}>
                    {/* Year (mobile) */}
                    <div className="md:hidden flex justify-center mb-4">
                      <div className="medallion">{item.year}</div>
                    </div>
                    <h4 className="text-xl md:text-2xl font-display font-bold text-burgundy mb-4">
                      {item.title}
                    </h4>
                    <p className="text-ink-dark font-body text-sm md:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </VintagePanel>
                </div>

                {/* Empty column for alignment */}
                {index % 2 === 0 && <div className="hidden md:block md:col-start-3 md:row-start-1" />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="mt-12">
          <FramedHistoricalImage
            placeholderText="[Chèn ảnh/timeline thực tiễn Việt Nam từ Đổi mới 1986 đến nay]"
            alt="Timeline Việt Nam Đổi mới"
            aspectRatio="wide"
            className="max-w-4xl mx-auto"
            src="/images/lien_he_thuc_tien.jpg"
          />
        </div>
      </div>
    </section>
  );
}
