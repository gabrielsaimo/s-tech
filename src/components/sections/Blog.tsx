"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Blog() {
  return (
    <section
      id="blog"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white/90 dark:bg-[#030712]/90" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <ScrollReveal>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-10"
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal delay={0.1}>
            <p className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-6">
              Blog
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Em breve, conteúdo exclusivo
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Estamos preparando artigos, tutoriais e insights sobre tecnologia, 
              design e desenvolvimento para ajudar sua organização a crescer.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
