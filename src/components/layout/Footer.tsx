"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getWhatsAppLink } from "@/lib/utils";

const footerLinks = {
  navegacao: [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contato" },
  ],
  servicos: [
    { label: "Sites Institucionais", href: "#servicos" },
    { label: "Aplicativos Mobile", href: "#servicos" },
    { label: "E-commerce", href: "#servicos" },
    { label: "Sistemas Web", href: "#servicos" },
  ],
};

const WHATSAPP_NUMBER = "5511989539505";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-[2] bg-gray-50/90 dark:bg-gray-950/90 border-t border-gray-200 dark:border-gray-800">
      <Container className="py-20">
        {/* Top Section - CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pb-16 border-b border-gray-200 dark:border-gray-800"
        >
          <p className="text-sm font-medium text-primary-500 mb-3">Pronto para começar?</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
            Vamos criar algo incrível juntos
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            Entre em contato e descubra como podemos transformar suas ideias em realidade digital.
          </p>
          <motion.a
            href={getWhatsAppLink(WHATSAPP_NUMBER)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Iniciar conversa
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Logo e Descrição */}
          <div className="col-span-2 md:col-span-1">
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center gap-2.5 mb-5 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="relative w-10 h-10 rounded-xl overflow-hidden"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="/logo-s.png" 
                  alt="S-tech Logo" 
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                />
              </motion.div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                S-tech
              </span>
            </motion.a>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Transformando ideias em soluções digitais há mais de 7 anos.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Serviços
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppLink(WHATSAPP_NUMBER)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(11) 98953-9505</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@s-tech.com.br"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contato@s-tech.com.br</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} S-tech. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              href="/privacidade" 
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacidade
            </Link>
            <Link 
              href="/termos" 
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Termos
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
