import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-24 selection:bg-black selection:text-white">
      <div className="max-w-[800px] mx-auto px-6 flex flex-col items-center">
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-center mb-24 leading-[0.95]">
          Hey! Tell us all <br />
          the things
        </h1>

        <ContactForm />

      </div>
    </main>
  );
}
