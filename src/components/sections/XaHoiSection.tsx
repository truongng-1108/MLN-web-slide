import { motion } from 'framer-motion';
import { OrnamentalSectionTitle, VintagePanel, RibbonTitle, FramedHistoricalImage, VintageArrow } from '../ui';
import { content } from '../../data/content';

export function XaHoiSection() {
  const data = content.xaHoi;
  const panelImages = [
    '/images/giam_bat_binh_dang.jpg',
    '/images/nang_cao_doi_song.jpg',
    '/images/cong_bang_xa_hoi.jpg',
    '/images/doan_ket_dan_toc.jpg',
  ];

  return (
    <section
      className="py-16 md:py-24 px-4 relative border-t-4 border-b-4 border-border-brown"
      style={{
        background: 'linear-gradient(180deg, #DEBA8A 0%, #F0D7AB 50%, #FBE8C2 100%)',
      }}
      id="xa-hoi"
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

        {/* Large Image Placeholder */}
        <FramedHistoricalImage
          placeholderText="[Chèn ảnh infographic tổng quan: Lĩnh vực xã hội trong thời kỳ quá độ]"
          alt="Infographic tổng quan lĩnh vực xã hội"
          aspectRatio="wide"
          className="max-w-4xl mx-auto mb-12"
          src="/images/linh_vuc_xa_hoi.jpg"
        />

        {/* 4 Poster Panels */}
        <div className="space-y-8 mb-12">
          {data.panels.map((panel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Công bằng xã hội - Special Treatment */}
              {panel.special ? (
                <div className="vintage-border bg-paper-light p-6 md:p-10">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl md:text-3xl font-display font-bold text-burgundy mb-4">
                      {panel.title}
                    </h4>
                    {panel.ribbon && (
                      <div className="inline-block mt-2">
                        <RibbonTitle variant="red">{panel.ribbon}</RibbonTitle>
                      </div>
                    )}
                  </div>

                  {/* Highlight */}
                  {panel.highlight && (
                    <motion.div
                      className="bg-burgundy text-gold-light font-display font-bold text-lg md:text-xl text-center py-4 px-6 mb-6"
                      style={{
                        borderBottom: '4px solid #C9A35A',
                        boxShadow: 'inset 0 -4px 0 rgba(0,0,0,0.2)',
                      }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      "{panel.highlight}"
                    </motion.div>
                  )}

                  <p className="text-ink-dark font-body text-base leading-relaxed mb-8">
                    {panel.content}
                  </p>

                  {/* Logic Flow */}
                  {panel.logicFlow && (
                    <div className="mb-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 md:gap-4">
                        {panel.logicFlow.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-2 md:gap-0">
                            <motion.div
                              className="bg-paper-muted border-2 border-gold-antique px-4 py-2 text-center"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: stepIndex * 0.1 }}
                            >
                              <span className="text-ink-dark font-body text-sm">{step}</span>
                            </motion.div>
                            {stepIndex < panel.logicFlow!.length - 1 && (
                              <VintageArrow direction="right" size="sm" className="hidden md:block" />
                            )}
                            {stepIndex < panel.logicFlow!.length - 1 && (
                              <VintageArrow direction="down" size="sm" className="md:hidden" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Conclusion */}
                  {panel.conclusion && (
                    <div className="border-2 border-gold-antique bg-paper-light/80 p-4 mt-6">
                      <p className="text-ink-dark font-body text-sm md:text-base leading-relaxed italic text-center">
                        {panel.conclusion}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Regular Panels */
                <VintagePanel delay={index * 0.15}>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-burgundy mb-4">
                    {panel.title}
                  </h4>
                  <p className="text-ink-dark font-body text-base leading-relaxed mb-6">
                    {panel.content}
                  </p>
                  <FramedHistoricalImage
                    placeholderText={`[Chèn ảnh infographic: ${panel.title}]`}
                    alt={panel.title}
                    aspectRatio="landscape"
                    src={panelImages[index]}
                  />
                </VintagePanel>
              )}

              {/* Image placeholder for special panel */}
              {panel.special && (
                <div className="mt-6">
                  <FramedHistoricalImage
                    placeholderText={`[Chèn ảnh infographic: ${panel.title}]`}
                    alt={panel.title}
                    aspectRatio="landscape"
                    src={panelImages[index]}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
