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
  Send,
  User,
  Building2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactBackground } from "@/components/ui/SectionBackgrounds";
import { getWhatsAppLink } from "@/lib/utils";

const WHATSAPP_NUMBER = "5511989539505";

export function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    desafio: "",
  });

  const handleWhatsAppClick = (customMessage?: string) => {
    const message = customMessage || "Olá, vi o site da S-Tech Web e gostaria de um orçamento.";
    window.open(getWhatsAppLink(WHATSAPP_NUMBER, message), "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Vim pelo site da S-Tech Web.

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*WhatsApp:* ${formData.whatsapp}

*Desafio:* ${formData.desafio}`;

    handleWhatsAppClick(message);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contato"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Background */}
      <ContactBackground />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left - Content */}
          <div>
            <ScrollReveal>
              <p className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-6">
                Contato
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                Vamos resolver seu{" "}
                <span className="text-gray-400 dark:text-gray-500">desafio juntos</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-12">
                Entre em contato pelo WhatsApp ou preencha o formulário. 
                Nossa equipe responde em até 2 horas!
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
                  className="w-full flex items-center gap-4 md:gap-6 p-5 md:p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800 text-left hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                    <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        WhatsApp
                      </h3>
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">
                        Recomendado
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                      (11) 98953-9505 · Resposta rápida
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-emerald-500" />
                </motion.button>
              </ScrollReveal>

              {/* Email */}
              <ScrollReveal delay={0.4}>
                <motion.a
                  href="mailto:contato@s-tech-web.com.br"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-0.5">
                      E-mail
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      contato@s-tech-web.com.br
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </motion.a>
              </ScrollReveal>

              {/* Info Cards */}
              <ScrollReveal delay={0.5}>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm font-medium text-gray-900 dark:text-white">Horário</p>
                      <p className="text-[10px] md:text-xs text-gray-500">Seg-Sex · 9h-18h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm font-medium text-gray-900 dark:text-white">Atendimento</p>
                      <p className="text-[10px] md:text-xs text-gray-500">100% Remoto</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right - Simple Contact Form */}
          <ScrollReveal direction="right">
            <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 md:p-10 lg:p-12 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Solicite um Orçamento
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Preencha o formulário que entraremos em contato
                </p>
              </div>

              {/* Simple Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Seu Nome *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Como podemos te chamar?"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Empresa */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Empresa
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nome da sua empresa (opcional)"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      placeholder="(00) 00000-0000"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Desafio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Qual é o seu desafio hoje? *
                  </label>
                  <textarea
                    name="desafio"
                    value={formData.desafio}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Conte um pouco sobre o que você precisa resolver..."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg transition-colors flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30"
                >
                  <Send className="w-5 h-5" />
                  Enviar pelo WhatsApp
                </motion.button>
              </form>

              <p className="text-center text-sm text-gray-400 mt-6">
                Resposta garantida em até 2 horas úteis
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
