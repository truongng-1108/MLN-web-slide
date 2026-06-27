import { motion } from 'framer-motion';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 md:py-16 px-4 relative border-t-4 border-border-brown"
      style={{
        background: 'linear-gradient(180deg, #3E0808 0%, #5B0F0F 50%, #3E0808 100%)',
      }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Logo / Badge */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto border-4 border-gold-antique flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #5B0F0F 0%, #7A1B16 50%, #5B0F0F 100%)',
                boxShadow: 'inset 0 0 0 3px #3E0808, 0 4px 12px rgba(72, 45, 20, 0.3)',
              }}
            >
              <span className="text-gold-light font-display font-bold text-2xl md:text-3xl">☭</span>
            </div>
          </div>
          <h4 className="text-gold-light font-display font-bold text-xl md:text-2xl mt-4">
            Bảo tàng số: Thời kỳ quá độ lên chủ nghĩa xã hội
          </h4>
          <p className="text-gold-light/70 font-body text-sm mt-2 max-w-md mx-auto leading-relaxed">
            Website học tập theo phong cách lịch sử – infographic, trình bày nội dung lý luận Mác – Lênin về thời kỳ quá độ lên chủ nghĩa xã hội.
          </p>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-16 md:w-24 h-px bg-gold-antique/50" />
          <div className="w-3 h-3 rotate-45 bg-gold-antique/50" />
          <div className="w-16 md:w-24 h-px bg-gold-antique/50" />
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Column 1: Nội dung */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h5 className="text-gold-antique font-display font-bold text-lg mb-4 text-center md:text-left">
              Nội dung
            </h5>
            <ul className="space-y-2 text-center md:text-left">
              {['Tính tất yếu', 'Đặc điểm chung', 'Kinh tế', 'Chính trị', 'Tư tưởng – văn hóa', 'Xã hội', 'Liên hệ Việt Nam'].map(
                (item) => (
                  <li key={item}>
                    <span className="text-gold-light/70 font-body text-sm hover:text-gold-light transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Column 2: Tài liệu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h5 className="text-gold-antique font-display font-bold text-lg mb-4 text-center md:text-left">
              Tài liệu
            </h5>
            <ul className="space-y-2 text-center md:text-left">
              {[
                'Chủ nghĩa Mác – Lênin',
                'Thời kỳ quá độ lên CNXH',
                'Liên hệ Việt Nam từ Đổi mới 1986',
              ].map((item) => (
                <li key={item}>
                  <span className="text-gold-light/70 font-body text-sm hover:text-gold-light transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Thông tin nhóm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h5 className="text-gold-antique font-display font-bold text-lg mb-4 text-center md:text-left">
              Thông tin nhóm
            </h5>
            <ul className="space-y-2 text-center md:text-left">
              {['Thành viên', 'Vai trò', 'Công cụ thực hiện'].map((item) => (
                <li key={item}>
                  <span className="text-gold-light/70 font-body text-sm hover:text-gold-light transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-10 border-t border-gold-antique/20">
          <p className="text-gold-light/50 font-body text-xs">
            © {currentYear} Bảo tàng số chủ nghĩa xã hội. Môn học Chủ nghĩa Mác – Lênin.
          </p>
        </div>
      </div>
    </footer>
  );
}
