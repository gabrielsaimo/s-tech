"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Building2, GraduationCap, Leaf, Shield, Church, Utensils, Gamepad2, Trophy, Ambulance, FileText, QrCode, Quote, Star, Car } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PortfolioBackground } from "@/components/ui/SectionBackgrounds";

// Depoimentos de parceiros
const testimonials = [
  {
    name: "Carlos Silva",
    role: "Diretor de TI",
    company: "Prefeitura de Uberlândia",
    avatar: "CS",
    testimonial: "A S-Tech Web entregou nosso portal LGPD em tempo recorde. A equipe entendeu nossas necessidades e criou uma solução que realmente funciona para os cidadãos.",
    rating: 5,
  },
  {
    name: "Ana Paula Santos",
    role: "Coordenadora",
    company: "Igreja Videira Uberlândia",
    avatar: "AP",
    testimonial: "Nosso site ficou moderno e acessível. O suporte é excelente, sempre respondem rápido quando precisamos de alguma alteração.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Gerente de Operações",
    company: "NacionalNet Educação",
    avatar: "RM",
    testimonial: "O sistema de rematrícula reduziu nosso trabalho em 80%. Antes gastávamos semanas, agora é tudo automático.",
    rating: 5,
  },
];

const projects = [
  {
    id: "lgpd-uberlandia",
    title: "Portal LGPD Uberlândia",
    category: "Portal Governamental",
    challenge: "A Prefeitura precisava atender à Lei Geral de Proteção de Dados, mas não tinha um sistema para receber e gerenciar solicitações dos cidadãos sobre seus dados pessoais.",
    solution: "Desenvolvemos um portal completo onde cidadãos podem fazer solicitações LGPD e os servidores gerenciam tudo em um painel administrativo.",
    results: [
      { label: "Solicitações/mês", value: "500+" },
      { label: "Tempo de resposta", value: "-60%" },
      { label: "Conformidade", value: "100%" },
    ],
    color: "from-amber-500 to-orange-600",
    featured: true,
    url: "https://lgpdprodaub.uberlandia.mg.gov.br",
    icon: Shield,
  },
  {
    id: "rematricula-nacionalnet",
    title: "Sistema de Rematrícula",
    category: "Sistema Educacional",
    challenge: "Escolas gastavam semanas para renovar matrículas manualmente, com filas de pais e papelada para organizar.",
    solution: "Criamos uma plataforma online onde pais renovam a matrícula pelo celular em minutos, com documentação digital e integração com o sistema da escola.",
    results: [
      { label: "Escolas atendidas", value: "50+" },
      { label: "Matrículas/ano", value: "10k+" },
      { label: "Tempo economizado", value: "80%" },
    ],
    color: "from-blue-600 to-indigo-700",
    featured: true,
    url: "https://rematricula.nacionalnet.com.br",
    icon: GraduationCap,
  },
  {
    id: "sistema-cropland",
    title: "Gestão Agrícola Cropland",
    category: "AgroTech",
    challenge: "Produtores rurais perdiam o controle de safras, custos e produtividade por falta de um sistema adequado ao campo.",
    solution: "Desenvolvemos um sistema que funciona mesmo offline, com controle de safras, gestão financeira e relatórios que ajudam na tomada de decisão.",
    results: [
      { label: "Fazendas", value: "200+" },
      { label: "Hectares gerenciados", value: "50k+" },
      { label: "Aumento produtividade", value: "+25%" },
    ],
    color: "from-green-500 to-lime-600",
    featured: true,
    url: "https://sistema.cropland.com.br",
    icon: Leaf,
  },
  {
    id: "igreja-videira",
    title: "Igreja Videira Uberlândia",
    category: "Website Institucional",
    challenge: "A igreja precisava de um site moderno que fosse acessível para pessoas surdas e fácil de atualizar pela equipe.",
    solution: "Criamos um site com acessibilidade em Libras, design elegante e um painel simples para a equipe publicar conteúdos.",
    results: [
      { label: "Acessos mensais", value: "5k+" },
      { label: "Satisfação", value: "100%" },
    ],
    color: "from-violet-500 to-purple-600",
    featured: true,
    url: "https://videira-uberlandia.com.br/",
    icon: Church,
  },
  {
    id: "gerencia-syskeeper",
    title: "SysKeeper Gerência",
    category: "Sistema de Gestão",
    challenge: "Empresas precisavam de um sistema centralizado para gerenciar operações, usuários e métricas.",
    solution: "Dashboard administrativo completo com controle de usuários, relatórios e gestão de recursos em tempo real.",
    results: [
      { label: "Empresas", value: "100+" },
      { label: "Usuários ativos", value: "2k+" },
      { label: "Uptime", value: "99.9%" },
    ],
    color: "from-emerald-500 to-teal-600",
    featured: false,
    url: "https://gerencia.syskeeper.com.br",
    icon: Building2,
  },
  {
    id: "central-ambulancia",
    title: "Central de Ambulâncias",
    category: "Portal Governamental",
    challenge: "A gestão de ambulâncias era feita por telefone, causando atrasos no atendimento de emergências.",
    solution: "Sistema de solicitação e gestão de ambulâncias com rastreamento em tempo real e otimização de rotas.",
    results: [
      { label: "Atendimentos/mês", value: "1k+" },
      { label: "Tempo resposta", value: "-40%" },
      { label: "Cobertura", value: "100%" },
    ],
    color: "from-red-500 to-rose-600",
    featured: false,
    url: "https://centralambulancia.uberlandia.mg.gov.br/principal",
    icon: Ambulance,
  },
  {
    id: "segunda-via",
    title: "Segunda Via de Documentos",
    category: "Portal Governamental",
    challenge: "Cidadãos precisavam ir presencialmente para solicitar segunda via de documentos municipais.",
    solution: "Portal online 24/7 para consulta e solicitação de documentos com acompanhamento do pedido.",
    results: [
      { label: "Consultas/mês", value: "5k+" },
      { label: "Satisfação", value: "95%" },
      { label: "Disponibilidade", value: "24/7" },
    ],
    color: "from-sky-500 to-blue-600",
    featured: false,
    url: "https://segundavia.uberlandia.mg.gov.br/consulta",
    icon: FileText,
  },
  {
    id: "pix-web",
    title: "PIX Web Uberlândia",
    category: "Portal Governamental",
    challenge: "Pagamentos de serviços municipais eram feitos apenas presencialmente ou por boleto.",
    solution: "Plataforma de pagamentos via PIX integrada aos serviços municipais com confirmação instantânea.",
    results: [
      { label: "Transações/mês", value: "10k+" },
      { label: "Valor processado", value: "R$2M+" },
      { label: "Uptime", value: "99.9%" },
    ],
    color: "from-teal-500 to-emerald-600",
    featured: false,
    url: "https://pix-web.uberlandia.mg.gov.br",
    icon: QrCode,
  },
  {
    id: "easy-cnh",
    title: "Easy CNH",
    category: "Plataforma Educacional",
    challenge: "Alunos tinham dificuldade em encontrar instrutores de direção confiáveis e agendar aulas de forma prática.",
    solution: "Plataforma que conecta alunos a instrutores certificados, com agendamento online, avaliações e acompanhamento de progresso em cada manobra.",
    results: [
      { label: "Instrutores", value: "100+" },
      { label: "Avaliações 5★", value: "500+" },
      { label: "Satisfação", value: "98%" },
    ],
    color: "from-cyan-500 to-blue-600",
    featured: false,
    url: "https://www.easy-cnh.com",
    icon: Car,
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

// Componente de Depoimento
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      
      <Quote className="w-8 h-8 text-primary-200 dark:text-primary-800 mb-4" />
      
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
        "{testimonial.testimonial}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role} · {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
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
              Cases de Sucesso
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              Resultados que{" "}
              <span className="text-gray-400 dark:text-gray-500">falam por si</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Veja como ajudamos empresas e governos a resolver desafios reais 
              com soluções sob medida.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured Projects - Case Studies */}
        <div className="space-y-10 mb-20">
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

                  {/* Content Side - Case Study Format */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Challenge */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-red-500 dark:text-red-400 uppercase tracking-wide mb-2">
                        O Desafio
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-8">
                      <p className="text-sm font-semibold text-emerald-500 dark:text-emerald-400 uppercase tracking-wide mb-2">
                        Nossa Solução
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

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

                    {/* Visit button */}
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Ver Projeto Funcionando
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-4">
                O que dizem nossos parceiros
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Depoimentos de quem confia no nosso trabalho
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.1}>
                <TestimonialCard testimonial={testimonial} />
              </ScrollReveal>
            ))}
          </div>
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
                    {project.challenge}
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
