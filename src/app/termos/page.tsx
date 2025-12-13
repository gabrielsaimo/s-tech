import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Termos de Uso | S-tech",
  description: "Termos de Uso da S-tech. Conheça as condições para utilização de nossos serviços de desenvolvimento de sites e aplicativos.",
};

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header simples */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg z-50">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            >
              <div className="w-9 h-9 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-gray-900 font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
                S-tech
              </span>
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
          </div>
        </Container>
      </header>

      {/* Conteúdo */}
      <Container className="py-16 md:py-24">
        <article className="max-w-3xl mx-auto">
          {/* Cabeçalho do documento */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Termos de Uso
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Última atualização: Dezembro de 2024
            </p>
          </header>

          {/* Conteúdo do documento */}
          <div className="space-y-8 text-gray-600 dark:text-gray-400 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. Aceitação dos Termos</h2>
              <p className="mb-4">
                Ao acessar e utilizar o site da <strong className="text-gray-900 dark:text-white">S-tech</strong> ou 
                contratar nossos serviços de desenvolvimento de sites e aplicativos, você concorda em cumprir 
                e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
                não deverá utilizar nosso site ou serviços.
              </p>
              <p>
                A S-tech é uma empresa brasileira especializada em soluções tecnológicas para governos e igrejas, 
                com atendimento 100% remoto em todo o território nacional desde 2018.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. Descrição dos Serviços</h2>
              <p className="mb-4">A S-tech oferece os seguintes serviços:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-gray-900 dark:text-white">Desenvolvimento de Sites:</strong> criação de sites 
                  institucionais, landing pages, portais e sistemas web personalizados.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Desenvolvimento de Aplicativos:</strong> aplicativos 
                  mobile para iOS e Android, aplicações híbridas e PWAs.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Sistemas Personalizados:</strong> desenvolvimento de 
                  sistemas sob medida para gestão, automação e processos específicos.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Consultoria Tecnológica:</strong> orientação estratégica 
                  para transformação digital de organizações.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. Uso do Site</h2>
              <p className="mb-4">Ao utilizar nosso site, você concorda em:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer informações verdadeiras e atualizadas quando solicitado;</li>
                <li>Não utilizar o site para fins ilegais ou não autorizados;</li>
                <li>Não tentar acessar áreas restritas do site sem autorização;</li>
                <li>Não interferir ou interromper o funcionamento do site;</li>
                <li>Não transmitir vírus, malware ou qualquer código malicioso;</li>
                <li>Respeitar os direitos de propriedade intelectual da S-tech e terceiros.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. Contratação de Serviços</h2>
              <p className="mb-4">
                A contratação de serviços da S-tech é formalizada através de proposta comercial e/ou contrato 
                específico, que detalharão:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Escopo detalhado do projeto;</li>
                <li>Prazos de entrega;</li>
                <li>Valores e condições de pagamento;</li>
                <li>Responsabilidades de cada parte;</li>
                <li>Condições de suporte e manutenção;</li>
                <li>Cláusulas de confidencialidade quando aplicável.</li>
              </ul>
              <p className="mt-4">
                Os termos específicos de cada contrato prevalecem sobre estes Termos de Uso gerais em caso 
                de conflito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5. Propriedade Intelectual</h2>
              <p className="mb-4">
                <strong className="text-gray-900 dark:text-white">Do site S-tech:</strong> Todo o conteúdo deste site, 
                incluindo textos, imagens, gráficos, logotipos, ícones, código-fonte e software, é de 
                propriedade da S-tech ou de seus licenciadores e está protegido pelas leis de propriedade 
                intelectual brasileiras e internacionais.
              </p>
              <p className="mb-4">
                <strong className="text-gray-900 dark:text-white">Dos projetos desenvolvidos:</strong> A propriedade 
                intelectual dos projetos desenvolvidos para clientes será definida em contrato específico. 
                Via de regra, após a quitação integral do projeto, o cliente terá direitos sobre o produto 
                final desenvolvido.
              </p>
              <p>
                A S-tech reserva-se o direito de utilizar os projetos desenvolvidos como referência em seu 
                portfólio, salvo acordo de confidencialidade em contrário.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">6. Responsabilidades do Cliente</h2>
              <p className="mb-4">Ao contratar serviços da S-tech, o cliente compromete-se a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer informações, conteúdos e materiais necessários para o projeto nos prazos acordados;</li>
                <li>Revisar e aprovar entregas dentro dos prazos estabelecidos;</li>
                <li>Efetuar os pagamentos nas datas acordadas;</li>
                <li>Garantir que possui direitos sobre os conteúdos fornecidos (textos, imagens, etc.);</li>
                <li>Manter sigilo sobre informações confidenciais da S-tech;</li>
                <li>Comunicar eventuais problemas ou solicitações de alteração de forma clara e documentada.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">7. Limitação de Responsabilidade</h2>
              <p className="mb-4">A S-tech não se responsabiliza por:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Atrasos causados por falta de fornecimento de informações ou materiais pelo cliente;</li>
                <li>Problemas decorrentes de serviços de terceiros (hospedagem, domínios, integrações, etc.);</li>
                <li>Danos indiretos, incidentais ou consequenciais decorrentes do uso dos serviços;</li>
                <li>Conteúdos fornecidos pelo cliente que violem direitos de terceiros;</li>
                <li>Indisponibilidade temporária do site por manutenção ou problemas técnicos;</li>
                <li>Decisões tomadas com base em informações do site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">8. Garantia e Suporte</h2>
              <p className="mb-4">
                Os projetos desenvolvidos pela S-tech possuem garantia contra defeitos de desenvolvimento, 
                conforme especificado em cada contrato. A garantia não cobre:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Alterações realizadas pelo cliente ou terceiros sem autorização;</li>
                <li>Problemas causados por uso inadequado ou fora das especificações;</li>
                <li>Falhas em serviços de terceiros (servidores, APIs externas, etc.);</li>
                <li>Solicitações de novas funcionalidades não previstas no escopo original.</li>
              </ul>
              <p className="mt-4">
                Serviços de suporte e manutenção contínua podem ser contratados separadamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">9. Rescisão</h2>
              <p className="mb-4">
                A S-tech reserva-se o direito de suspender ou encerrar a prestação de serviços em caso de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Inadimplência do cliente;</li>
                <li>Violação destes Termos de Uso ou do contrato específico;</li>
                <li>Uso dos serviços para fins ilegais ou antiéticos;</li>
                <li>Comportamento abusivo ou desrespeitoso com a equipe.</li>
              </ul>
              <p className="mt-4">
                As condições de rescisão por parte do cliente serão definidas no contrato específico de 
                cada projeto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">10. Modificações dos Termos</h2>
              <p>
                A S-tech pode modificar estes Termos de Uso a qualquer momento, publicando a versão 
                atualizada em nosso site. Recomendamos que você revise periodicamente esta página. 
                O uso continuado do site ou serviços após alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">11. Lei Aplicável e Foro</h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer 
                disputa relacionada a estes termos será submetida ao foro da comarca de São Paulo/SP, 
                com exclusão de qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">12. Disposições Gerais</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A tolerância quanto a qualquer descumprimento destes termos não implica renúncia ou 
                  novação das obrigações aqui estabelecidas.
                </li>
                <li>
                  Se qualquer disposição destes termos for considerada inválida, as demais permanecerão 
                  em pleno vigor.
                </li>
                <li>
                  Estes termos constituem o acordo integral entre você e a S-tech em relação ao uso do 
                  site e substituem quaisquer acordos anteriores.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">13. Contato</h2>
              <p className="mb-4">
                Para dúvidas sobre estes Termos de Uso ou para contratar nossos serviços, entre em contato:
              </p>
              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">S-tech</strong>
                </p>
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">Responsável:</strong> Saimo (Founder & CEO)
                </p>
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">E-mail:</strong>{" "}
                  <a 
                    href="mailto:gabrielsaimo68@gmail.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    gabrielsaimo68@gmail.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">WhatsApp:</strong>{" "}
                  <a 
                    href="https://wa.me/5511989539505" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    (11) 98953-9505
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Atendimento 100% remoto em todo o Brasil | Desde 2018
                </p>
              </div>
            </section>

          </div>
        </article>
      </Container>

      {/* Footer simples */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <Container className="py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} S-tech. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="/privacidade"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                href="/"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Página Inicial
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
