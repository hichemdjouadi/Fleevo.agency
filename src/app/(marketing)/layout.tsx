import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import { LanguageProvider } from "@/lib/i18n";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <Preloader />
      <div className="fixed inset-0 z-[40] pointer-events-none opacity-[0.02] bg-noise mix-blend-multiply" />
      <ScrollProgress />
      <SmoothScrolling>
        <Navbar />
        {children}
      </SmoothScrolling>
    </LanguageProvider>
  );
}
