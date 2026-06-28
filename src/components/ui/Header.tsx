import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Trang chủ', to: 'trang-chu' },
  { label: 'Thành viên', to: 'thanh-vien' },
  { label: 'Tính tất yếu', to: 'tinh-tat-yeu' },
  { label: 'Đặc điểm', to: 'dac-diem-chung' },
  { label: 'Kinh tế', to: 'kinh-te' },
  { label: 'Chính trị', to: 'chinh-tri' },
  { label: 'Tư tưởng', to: 'tu-tuong-van-hoa' },
  { label: 'Xã hội', to: 'xa-hoi' },
  { label: 'Việt Nam', to: 'viet-nam' },
  { label: 'Mindmap', to: 'so-do' },
  { label: 'Quiz', to: 'quiz' },
  { label: 'Kết luận', to: 'ket-luan' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-border-brown/60 bg-paper-light/95 shadow-vintage backdrop-blur'
          : 'border-transparent bg-paper-light/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        {/* Logo */}
        <Link to="trang-chu" smooth duration={700} className="flex cursor-pointer items-center gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold-antique"
            style={{
              background: 'linear-gradient(135deg, #5B0F0F 0%, #7A1B16 50%, #5B0F0F 100%)',
              boxShadow: 'inset 0 0 0 3px #3E0808',
            }}
          >
            <span className="font-display text-2xl font-bold text-gold-light">☭</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-burgundy md:text-lg">
              Chủ nghĩa xã hội
            </div>
            <div className="font-body text-[11px] text-ink-soft md:text-xs">
              Thời kỳ quá độ lên CNXH
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              spy
              offset={-80}
              duration={700}
              activeClass="!text-burgundy after:!scale-x-100"
              className="relative cursor-pointer px-2.5 py-1 font-body text-sm text-ink-dark transition-colors hover:text-burgundy after:absolute after:inset-x-2.5 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold-antique after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded border border-gold-antique text-burgundy xl:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Mở menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-border-brown/40 bg-paper-light/98 backdrop-blur xl:hidden">
          <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-3 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                spy
                offset={-70}
                duration={700}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer rounded px-3 py-2 font-body text-sm text-ink-dark hover:bg-paper-muted/60 hover:text-burgundy"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
