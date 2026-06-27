import { motion } from 'framer-motion';
import { OrnamentalSectionTitle, VintagePanel, NumberMedallion } from '../ui';
import { content } from '../../data/content';

export function DacDiemChungSection() {
  const data = content.dacDiemChung;

  return (
    <section
      className="py-16 md:py-24 px-4 relative border-t-4 border-b-4 border-border-brown"
      style={{
        background: 'linear-gradient(180deg, #DEBA8A 0%, #F0D7AB 50%, #FBE8C2 100%)',
      }}
      id="dac-diem-chung"
    >
      <div className="container mx-auto max-w-6xl">
        <OrnamentalSectionTitle label={data.label} title={data.title} />

        {/* Intro */}
        <motion.p
          className="text-ink-dark font-body text-base md:text-lg text-center leading-relaxed max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {data.intro}
        </motion.p>

        {/* 4 Panel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {data.panels.map((panel, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <VintagePanel delay={index * 0.1}>
                <div className="relative">
                  <div className="absolute -top-8 left-6">
                    <NumberMedallion number={panel.number} size="lg" />
                  </div>
                  <div className="pt-8">
                    <h4 className="text-xl md:text-2xl font-display font-bold text-burgundy mb-4">
                      {panel.title}
                    </h4>
                    <p className="text-ink-dark font-body text-base leading-relaxed">
                      {panel.content}
                    </p>
                  </div>
                </div>
              </VintagePanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
