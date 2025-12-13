import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { Portfolio } from "@/components/sections/Portfolio";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Home() {
  return (
    <>
      <SpeedInsights />
      <AnimatedBackground />
      {/* Fixed Watermark Logo - follows scroll */}
      <div 
        className="fixed inset-0 pointer-events-none z-[5] flex items-center justify-center"
        aria-hidden="true"
      >
        <div 
          className="w-[600px] h-[600px] opacity-[0.04] dark:opacity-[0.03]"
          style={{
            backgroundImage: 'url(/logo-s.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <Header />
      <main className="relative z-[2]">
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
