"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";

const WHATSAPP_NUMBER = "5511989539505";
const DEFAULT_MESSAGE = "Olá! Gostaria de um orçamento para meu projeto.";

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Simple CSS-only floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-2xl border border-primary-500/10 animate-float-slow" />
        <div className="absolute top-[15%] right-[15%] w-10 h-10 rounded-xl border border-secondary-500/10 animate-float-medium" />
        <div className="absolute bottom-[25%] left-[15%] w-12 h-12 rounded-2xl border border-accent-500/10 animate-float-fast" />
        <div className="absolute bottom-[20%] right-[10%] w-20 h-20 rounded-3xl border border-primary-500/10 animate-float-slow" />
      </div>

      <Container className="relative z-10 py-32">
        <div className="max-w-5xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-lg shadow-gray-200/20 dark:shadow-none">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                7+ anos transformando ideias em realidade
              </span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Criamos experiências
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                  digitais memoráveis
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full" />
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Especialistas em desenvolvimento de sites e aplicativos para{" "}
            <span className="text-gray-900 dark:text-white font-medium">governos</span> e{" "}
            <span className="text-gray-900 dark:text-white font-medium">instituições religiosas</span>.
            Atendimento remoto em todo o Brasil.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
          >
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  getWhatsAppLink(WHATSAPP_NUMBER, DEFAULT_MESSAGE),
                  "_blank"
                )
              }
              className="group min-w-[220px] shadow-xl shadow-primary-500/25"
            >
              <span className="flex items-center gap-2">
                Iniciar Projeto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => handleScroll("#portfolio")}
              className="group min-w-[220px]"
            >
              <span className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                  <Play className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 transition-colors ml-0.5" />
                </div>
                Ver Trabalhos
              </span>
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-wrap justify-center gap-x-16 md:gap-x-24 gap-y-10">
              {[
                { value: "7+", label: "Anos no mercado" },
                { value: "50+", label: "Projetos entregues" },
                { value: "100%", label: "Remoto" },
                { value: "24h", label: "Suporte" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center hover:scale-105 transition-transform"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => handleScroll("#sobre")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-400 hover:text-primary-500 transition-colors"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
          </div>
        </motion.button>
      </Container>
    </section>
  );
}
