"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TechnologiesBackground } from "@/components/ui/SectionBackgrounds";

const techStack = [
  {
    category: "Frontend",
    description: "Interfaces modernas e responsivas",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    description: "APIs robustas e escaláveis",
    technologies: ["Node.js", "Python", "PHP", "Laravel", "NestJS"],
  },
  {
    category: "Mobile",
    description: "Apps nativos e híbridos",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "Cloud & Database",
    description: "Infraestrutura confiável",
    technologies: ["PostgreSQL", "MongoDB", "Firebase", "AWS", "Vercel"],
  },
];

export function Technologies() {
  return (
    <section
      id="tecnologias"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Interactive Background */}
      <TechnologiesBackground />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <p className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-6">
              Tecnologias
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              Stack moderna para{" "}
              <span className="text-gray-400 dark:text-gray-500">resultados excepcionais</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Utilizamos as tecnologias mais avançadas e confiáveis do mercado para 
              garantir performance, segurança e escalabilidade.
            </p>
          </ScrollReveal>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {techStack.map((stack, categoryIndex) => (
            <ScrollReveal 
              key={stack.category} 
              delay={categoryIndex * 0.1}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative p-12 rounded-3xl bg-gray-50 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 h-full shadow-sm hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-800 transition-all duration-500 overflow-hidden group"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                  }}
                />
                
                {/* Category Header */}
                <div className="mb-8 relative">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {stack.category}
                  </motion.h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {stack.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-4 relative">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + techIndex * 0.08, duration: 0.4 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                      }}
                      className="px-6 py-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm shadow-sm hover:border-primary-400 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-default"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>

                {/* Decorative gradient with animation */}
                <motion.div 
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-tr-3xl rounded-bl-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Corner accent */}
                <motion.div 
                  className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary-500/50"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Text */}
        <ScrollReveal delay={0.5}>
          <motion.div 
            className="mt-16 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-500 dark:text-gray-400">
              E muito mais. Escolhemos a <span className="text-primary-500 font-medium">stack ideal</span> para cada projeto.
            </p>
          </motion.div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
