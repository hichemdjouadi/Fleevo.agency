import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import BlueprintToggle from "@/components/BlueprintToggle";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Preloader />
      <div className="fixed inset-0 z-[40] pointer-events-none opacity-[0.02] bg-noise mix-blend-multiply" />
      <CustomCursor />
      <ScrollProgress />
      <BlueprintToggle />
      <SmoothScrolling>
        <Navbar />
        {children}
      </SmoothScrolling>
    </>
  );
}
