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

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
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
