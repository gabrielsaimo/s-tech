"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Building2, GraduationCap, Leaf, Shield, Church, Utensils, Gamepad2, Trophy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PortfolioBackground } from "@/components/ui/SectionBackgrounds";

const projects = [
  {
    id: "rematricula-nacionalnet",
    title: "Rematrícula NacionalNet",
    category: "Sistema Educacional",
    description:
      "Plataforma completa de rematrícula online para instituições de ensino. Sistema automatizado que facilita o processo de renovação de matrículas com interface intuitiva para pais e responsáveis.",
    results: [
      { label: "Escolas", value: "50+" },
      { label: "Matrículas/ano", value: "10k+" },
      { label: "Tempo economizado", value: "80%" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "from-blue-600 to-indigo-700",
    featured: true,
    url: "https://rematricula.nacionalnet.com.br",
    icon: GraduationCap,
  },
  {
    id: "gerencia-syskeeper",
    title: "SysKeeper Gerência",
    category: "Sistema de Gestão",
    description:
      "Sistema completo de gerenciamento empresarial. Dashboard administrativo com controle de usuários, relatórios, métricas de desempenho e gestão de recursos em tempo real.",
    results: [
      { label: "Empresas", value: "100+" },
      { label: "Usuários ativos", value: "2k+" },
      { label: "Uptime", value: "99.9%" },
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    color: "from-emerald-500 to-teal-600",
    featured: true,
    url: "https://gerencia.syskeeper.com.br",
    icon: Building2,
  },
  {
    id: "sistema-cropland",
    title: "Cropland Sistema",
    category: "AgroTech",
    description:
      "Sistema de gestão agrícola completo para produtores rurais. Controle de safras, monitoramento de culturas, gestão financeira e relatórios de produtividade para o agronegócio.",
    results: [
      { label: "Fazendas", value: "200+" },
      { label: "Hectares gerenciados", value: "50k+" },
      { label: "Produtividade", value: "+25%" },
    ],
    technologies: ["React", "Node.js", "MongoDB", "IoT"],
    color: "from-green-500 to-lime-600",
    featured: true,
    url: "https://sistema.cropland.com.br",
    icon: Leaf,
  },
  {
    id: "lgpd-uberlandia",
    title: "LGPD Uberlândia",
    category: "Portal Governamental",
    description:
      "Portal de conformidade LGPD para a Prefeitura de Uberlândia. Sistema de gestão de dados pessoais, solicitações de titulares e compliance com a Lei Geral de Proteção de Dados.",
    results: [
      { label: "Solicitações/mês", value: "500+" },
      { label: "Tempo resposta", value: "-60%" },
      { label: "Conformidade", value: "100%" },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    color: "from-amber-500 to-orange-600",
    featured: true,
    url: "https://lgpdprodaub.uberlandia.mg.gov.br",
    icon: Shield,
  },
  {
    id: "igreja-videira",
    title: "Igreja Videira Uberlândia",
    category: "Website Institucional",
    description:
      "Site institucional moderno para a Igreja Videira de Uberlândia. Design elegante com acessibilidade em Libras e integração com redes sociais.",
    results: [
      { label: "Acessos mensais", value: "5k+" },
      { label: "Satisfação", value: "100%" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    color: "from-violet-500 to-purple-600",
    featured: false,
    url: "https://videira-uberlandia.com.br/",
    icon: Church,
  },
  {
    id: "menu-digital",
    title: "Menu Digital",
    category: "SaaS / Sistema Web",
    description:
      "Plataforma completa de cardápio digital para restaurantes com sistema de delivery e comandas digitais.",
    results: [
      { label: "Clientes ativos", value: "30+" },
      { label: "Pedidos/mês", value: "2k+" },
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "from-orange-500 to-red-600",
    featured: false,
    url: "https://menu-digital.vercel.app/",
    icon: Utensils,
  },
  {
    id: "sapalavras",
    title: "SaPalavras",
    category: "Jogo Web",
    description:
      "Jogo multiplayer de palavras interativo com múltiplas categorias e mecânica de turnos.",
    results: [
      { label: "Jogadores", value: "500+" },
      { label: "Partidas/mês", value: "1k+" },
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    color: "from-pink-500 to-rose-600",
    featured: false,
    url: "https://sapalavras.vercel.app/",
    icon: Gamepad2,
  },
  {
    id: "ranking-pro",
    title: "Ranking Pro",
    category: "Ferramenta Web",
    description:
      "Sistema de criação de rankings interativos com drag and drop e torneios chaveados.",
    results: [
      { label: "Rankings criados", value: "200+" },
      { label: "Usuários", value: "300+" },
    ],
    technologies: ["React", "TypeScript", "DnD Kit"],
    color: "from-cyan-500 to-blue-600",
    featured: false,
    url: "https://rankinggs.vercel.app/",
    icon: Trophy,
  },
];

// Componente de preview do site com iframe
function SitePreview({ url, title, color }: { url: string; title: string; color: string }) {
  return (
    <div className="absolute inset-4 lg:inset-8 rounded-xl overflow-hidden shadow-2xl bg-white">
      {/* Browser Chrome */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 dark:bg-gray-800 flex items-center gap-2 px-4 z-10">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full text-[10px] text-gray-500 dark:text-gray-400 flex items-center justify-center truncate px-2">
            {url.replace('https://', '')}
          </div>
        </div>
      </div>
      {/* Site iframe */}
      <div className="pt-8 h-full bg-gray-50 relative">
        <iframe
          src={url}
          title={`Preview de ${title}`}
          className="w-full h-full border-0 pointer-events-none"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%' }}
        />
      </div>
    </div>
  );
}

// Mini preview para cards menores
function MiniSitePreview({ url, title }: { url: string; title: string }) {
  return (
    <div className="absolute inset-2 rounded-lg overflow-hidden bg-white shadow-lg">
      {/* Mini browser chrome */}
      <div className="absolute top-0 left-0 right-0 h-5 bg-gray-100 flex items-center gap-1.5 px-2 z-10">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
      </div>
      <div className="pt-5 h-full bg-gray-50 relative">
        <iframe
          src={url}
          title={`Preview de ${title}`}
          className="w-full h-full border-0 pointer-events-none"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          style={{ transform: 'scale(0.35)', transformOrigin: 'top left', width: '286%', height: '286%' }}
        />
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Interactive Background */}
      <PortfolioBackground />

      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal>
            <p className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-6">
              Portfólio
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              Projetos que{" "}
              <span className="text-gray-400 dark:text-gray-500">fazem a diferença</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos e o impacto 
              que geramos para nossos clientes.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured Projects - Large Cards with Screenshots */}
        <div className="space-y-10 mb-16">
          {projects.filter((p) => p.featured).map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Screenshot Side */}
                  <div className={`relative h-72 lg:h-auto min-h-[400px] bg-gradient-to-br ${project.color} overflow-hidden`}>
                    {/* Website Preview */}
                    <SitePreview url={project.url} title={project.title} color={project.color} />
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                        <project.icon className="w-4 h-4" />
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
                      {project.results.map((result) => (
                        <div key={result.label}>
                          <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Visit button */}
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Ver Projeto
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other Projects Grid - Smaller Cards */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Outros Projetos
          </h3>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter((p) => !p.featured).map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.05}>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group block bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
              >
                {/* Screenshot */}
                <div className={`relative h-40 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <MiniSitePreview url={project.url} title={project.title} />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <project.icon className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.category}
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400">
                    Ver projeto
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
