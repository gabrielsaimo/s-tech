"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ServicesBackground } from "@/components/ui/SectionBackgrounds";
import { getWhatsAppLink } from "@/lib/utils";

const services = [
  {
    id: "01",
    title: "Sites Institucionais",
    description: "Websites modernos e responsivos que transmitem a essência da sua organização. Design premium com foco em conversão e experiência do usuário.",
    features: [
      "Design responsivo para todos dispositivos",
      "Otimização SEO completa",
      "Painel administrativo intuitivo",
      "Carregamento ultrarrápido",
      "Integração com redes sociais",
      "Certificado SSL incluso",
    ],
    image: "web",
  },
  {
    id: "02",
    title: "Aplicativos Mobile",
    description: "Apps nativos e híbridos que proporcionam uma experiência excepcional. Disponíveis para iOS e Android com design intuitivo.",
    features: [
      "Apps para iOS e Android",
      "Notificações push",
      "Modo offline",
      "Interface nativa",
      "Atualizações Over-the-Air",
      "Analytics integrado",
    ],
    image: "mobile",
  },
  {
    id: "03",
    title: "Sistemas Web",
    description: "Sistemas personalizados para automatizar processos e aumentar a produtividade da sua organização. Dashboards e relatórios em tempo real.",
    features: [
      "Dashboard personalizado",
      "Relatórios automatizados",
      "Gestão de usuários",
      "API REST moderna",
      "Backup automático",
      "Suporte técnico dedicado",
    ],
    image: "system",
  },
];

const WHATSAPP_NUMBER = "5511989539505";

export function Services() {
  const handleContactClick = (service: string) => {
    const message = `Olá! Tenho interesse em ${service}. Podemos conversar?`;
    window.open(getWhatsAppLink(WHATSAPP_NUMBER, message), "_blank");
  };

  return (
    <section
      id="servicos"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Interactive Background */}
      <ServicesBackground />

      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal>
            <p className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-6">
              Serviços
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              Soluções completas para sua{" "}
              <span className="text-gray-400 dark:text-gray-500">presença digital</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Do conceito à implementação, oferecemos um conjunto completo de 
              serviços para transformar sua visão em realidade.
            </p>
          </ScrollReveal>
        </div>

        {/* Services List */}
        <div className="space-y-10">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-800 transition-all duration-500"
              >
                {/* Animated border gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="grid lg:grid-cols-2 relative">
                  {/* Content */}
                  <div className="p-6 md:p-12 lg:p-16">
                    {/* Number with animation */}
                    <motion.div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 font-mono text-sm font-semibold mb-8 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.id}
                    </motion.div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10 text-[16px]">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      onClick={() => handleContactClick(service.title)}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Solicitar Orçamento
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Visual Side */}
                  <div className="relative h-64 lg:h-auto min-h-[320px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl" />
                    </div>
                    
                    <div className="relative text-center z-10">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl flex items-center justify-center"
                      >
                        {service.image === "web" && (
                          <svg className="w-16 h-16 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                          </svg>
                        )}
                        {service.image === "mobile" && (
                          <svg className="w-16 h-16 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                          </svg>
                        )}
                        {service.image === "system" && (
                          <svg className="w-16 h-16 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                        )}
                      </motion.div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {service.title}
                      </p>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute top-6 right-6 w-16 h-16 border border-gray-300 dark:border-gray-700 rounded-2xl opacity-40" />
                    <div className="absolute bottom-6 left-6 w-12 h-12 border border-gray-300 dark:border-gray-700 rounded-xl opacity-40" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
