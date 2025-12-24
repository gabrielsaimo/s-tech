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
    { label: "Soluções", href: "#servicos" },
    { label: "Cases", href: "#portfolio" },
    { label: "Contato", href: "#contato" },
  ],
  solucoes: [
    { label: "Automação Comercial", href: "#servicos" },
    { label: "Desenvolvimento White Label", href: "#servicos" },
    { label: "Aplicativos Corporativos", href: "#servicos" },
    { label: "Sites e Portais", href: "#servicos" },
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
            Sua empresa merece tecnologia de qualidade
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            Agende uma consultoria gratuita e descubra como podemos resolver seus desafios.
          </p>
          <motion.a
            href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá, vi o site da S-Tech Web e gostaria de um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar Consultoria Gratuita
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
                  alt="S-Tech Web Logo" 
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                />
              </motion.div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                S-Tech Web
              </span>
            </motion.a>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Desenvolvimento de Software e Sites em Uberlândia - MG. Atendemos o Triângulo Mineiro e todo o Brasil.
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

          {/* Soluções */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Soluções
            </h3>
            <ul className="space-y-3">
              {footerLinks.solucoes.map((link) => (
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
                  href="mailto:contato@s-tech-web.com.br"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contato@s-tech-web.com.br</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Local Section */}
        <div className="text-center py-8 border-t border-gray-200 dark:border-gray-800 mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            <strong className="text-gray-700 dark:text-gray-300">Desenvolvimento de Software e Sites em Uberlândia - MG</strong>
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Atendemos empresas do Triângulo Mineiro: Uberlândia, Uberaba, Araguari, Patos de Minas e região.
            <br />
            Também atendemos remotamente em todo o Brasil.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} S-Tech Web Soluções em Tecnologia. Todos os direitos reservados.
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
