"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Clock,
  ArrowUpRight,
  Phone,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactBackground } from "@/components/ui/SectionBackgrounds";
import { getWhatsAppLink } from "@/lib/utils";

const WHATSAPP_NUMBER = "5511989539505";

const quickMessages = [
  "Quero um orçamento para um site institucional",
  "Preciso de um aplicativo mobile",
  "Tenho interesse em um sistema web personalizado",
  "Quero saber mais sobre os serviços",
];

export function Contact() {
  const [selectedMessage, setSelectedMessage] = useState("");

  const handleWhatsAppClick = (message?: string) => {
    const finalMessage = message || selectedMessage || "Olá! Vim pelo site e gostaria de mais informações.";
    window.open(getWhatsAppLink(WHATSAPP_NUMBER, finalMessage), "_blank");
  };

  return (
    <section
      id="contato"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Background */}
      <ContactBackground />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <div>
            <ScrollReveal>
              <p className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-6">
                Contato
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                Vamos criar algo{" "}
                <span className="text-gray-400 dark:text-gray-500">incrível juntos</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-12">
                Entre em contato pelo WhatsApp e receba um atendimento 
                personalizado. Responderemos em até 2 horas!
              </p>
            </ScrollReveal>

            {/* Contact Options */}
            <div className="space-y-6">
              {/* WhatsApp - Principal */}
              <ScrollReveal delay={0.3}>
                <motion.button
                  onClick={() => handleWhatsAppClick()}
                  whileHover={{ x: 8, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center gap-6 p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800 text-left hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        WhatsApp
                      </h3>
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">
                        Recomendado
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      (11) 98953-9505 · Resposta rápida
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-emerald-500" />
                </motion.button>
              </ScrollReveal>

              {/* Email */}
              <ScrollReveal delay={0.4}>
                <motion.a
                  href="mailto:contato@s-tech.com.br"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-0.5">
                      E-mail
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      contato@s-tech.com.br
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </motion.a>
              </ScrollReveal>

              {/* Info Cards */}
              <ScrollReveal delay={0.5}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Horário</p>
                      <p className="text-xs text-gray-500">Seg-Sex · 9h-18h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Atendimento</p>
                      <p className="text-xs text-gray-500">100% Remoto</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right - Quick Contact Card */}
          <ScrollReveal direction="right">
            <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-10 lg:p-12 shadow-sm">
              <div className="text-center mb-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Fale Conosco Agora
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Escolha uma opção ou clique direto no botão
                </p>
              </div>

              {/* Quick Messages */}
              <div className="space-y-3 mb-8">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Selecione o assunto (opcional):
                </p>
                {quickMessages.map((msg, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedMessage(msg)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                      selectedMessage === msg
                        ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300"
                        : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    <span className="text-sm">{msg}</span>
                  </motion.button>
                ))}
              </div>

              {/* Main CTA */}
              <motion.button
                onClick={() => handleWhatsAppClick()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg transition-colors flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30"
              >
                <MessageCircle className="w-6 h-6" />
                Iniciar Conversa no WhatsApp
              </motion.button>

              <p className="text-center text-sm text-gray-400 mt-6">
                Atendimento humanizado · Sem robôs
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
