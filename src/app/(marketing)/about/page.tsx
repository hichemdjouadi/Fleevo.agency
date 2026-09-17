import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Fleevo",
  description: "A global digital product agency.",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-40 md:pt-56">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 mb-24 md:mb-32">
        <h1 className="text-[12vw] md:text-[8vw] font-medium tracking-tighter mb-8 leading-none">
          The Agency.
        </h1>
        <p className="text-2xl md:text-4xl text-white/60 max-w-4xl font-light leading-tight tracking-tight">
          80% of B2B websites lose leads in the first 10 seconds. We don't build websites. We build autonomous infrastructure designed to capture, qualify, and convert.
        </p>
      </div>

      <AboutUs />
      <Footer />
    </main>
  );
}
