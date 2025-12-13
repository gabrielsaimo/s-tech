"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AboutBackground } from "@/components/ui/SectionBackgrounds";

const capabilities = [
  "Sites Institucionais",
  "Aplicativos Mobile",
  "Sistemas Web",
  "E-commerce",
  "Dashboards",
  "Integrações",
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Interactive Background */}
      <AboutBackground />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div>
            <ScrollReveal>
              <p className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-6">
                Sobre Nós
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                Construímos o{" "}
                <span className="text-gray-400 dark:text-gray-500">futuro digital</span>{" "}
                de organizações que transformam vidas
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                Desde 2018, a S-tech desenvolve soluções digitais sob medida para governos e 
                instituições religiosas. Nossa missão é democratizar o acesso à tecnologia 
                de qualidade, com atendimento 100% remoto em todo o Brasil.
              </p>
            </ScrollReveal>

            {/* CEO Info */}
            <ScrollReveal delay={0.25}>
              <div className="flex items-center gap-4 mb-10 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Saimo</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fundador & CEO</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Capabilities */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-10">
                {capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <motion.a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 text-gray-900 dark:text-white font-semibold group"
                whileHover={{ x: 4 }}
              >
                Conheça nossos serviços
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </ScrollReveal>
          </div>

          {/* Right - Stats */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "7+", label: "Anos de experiência", sublabel: "Desde 2018" },
                { value: "50+", label: "Projetos entregues", sublabel: "E contando" },
                { value: "30+", label: "Clientes satisfeitos", sublabel: "Governos e igrejas" },
                { value: "100%", label: "Atendimento remoto", sublabel: "Todo Brasil" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="relative p-10 rounded-3xl bg-gray-50 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                  <div className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400 dark:text-gray-500">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
