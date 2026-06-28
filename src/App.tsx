import { VintagePage, Header } from './components/ui';
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
  ToolsSection,
  FooterSection,
} from './components/sections';

function App() {
  return (
    <VintagePage>
      <Header />
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
      <ToolsSection />
      <FooterSection />
    </VintagePage>
  );
}

export default App;
