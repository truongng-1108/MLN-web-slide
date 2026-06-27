import { VintagePage } from './components/ui';
import {
  HeroSection,
  TinhTatYeuSection,
  DacDiemChungSection,
  KinhTeSection,
  ChinhTriSection,
  TuTuongVanHoaSection,
  XaHoiSection,
  VietNamSection,
  SoDoSection,
  QuizSection,
  KetLuanSection,
  FooterSection,
} from './components/sections';

function App() {
  return (
    <VintagePage>
      <HeroSection />
      <TinhTatYeuSection />
      <DacDiemChungSection />
      <KinhTeSection />
      <ChinhTriSection />
      <TuTuongVanHoaSection />
      <XaHoiSection />
      <VietNamSection />
      <SoDoSection />
      <QuizSection />
      <KetLuanSection />
      <FooterSection />
    </VintagePage>
  );
}

export default App;
