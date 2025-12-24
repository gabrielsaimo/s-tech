import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de Privacidade | S-Tech Web",
  description: "Política de Privacidade da S-Tech Web. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
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
                S-Tech Web
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
              Política de Privacidade
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Última atualização: Dezembro de 2024
            </p>
          </header>

          {/* Conteúdo do documento */}
          <div className="space-y-8 text-gray-600 dark:text-gray-400 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. Introdução</h2>
              <p className="mb-4">
                A <strong className="text-gray-900 dark:text-white">S-Tech Web</strong>, empresa especializada em desenvolvimento de sites e aplicativos para 
                governos e igrejas, com sede no Brasil e atendimento 100% remoto em todo território nacional, 
                está comprometida com a proteção da privacidade de seus usuários e clientes.
              </p>
              <p>
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas 
                informações pessoais quando você utiliza nossos serviços ou acessa nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. Informações que Coletamos</h2>
              <p className="mb-4">Podemos coletar os seguintes tipos de informações:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-gray-900 dark:text-white">Dados de identificação:</strong> nome completo, CPF/CNPJ, endereço de e-mail e 
                  número de telefone/WhatsApp.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Dados de comunicação:</strong> mensagens trocadas via e-mail, WhatsApp ou 
                  formulários de contato.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, 
                  tempo de permanência e outras informações de uso.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Dados comerciais:</strong> informações sobre projetos, propostas e contratos 
                  firmados conosco.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. Como Utilizamos suas Informações</h2>
              <p className="mb-4">Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prestar os serviços contratados de desenvolvimento de sites e aplicativos;</li>
                <li>Responder às suas solicitações e fornecer suporte ao cliente;</li>
                <li>Enviar comunicações relevantes sobre nossos serviços;</li>
                <li>Melhorar nosso site e serviços com base no feedback e comportamento dos usuários;</li>
                <li>Cumprir obrigações legais e regulatórias;</li>
                <li>Proteger nossos direitos e prevenir fraudes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. Compartilhamento de Dados</h2>
              <p className="mb-4">
                A S-Tech Web não vende, aluga ou compartilha suas informações pessoais com terceiros para fins 
                de marketing. Podemos compartilhar seus dados apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-gray-900 dark:text-white">Prestadores de serviços:</strong> empresas que nos auxiliam na operação do 
                  negócio (hospedagem, processamento de pagamentos, etc.), sempre sob acordos de 
                  confidencialidade.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Obrigações legais:</strong> quando exigido por lei, ordem judicial ou 
                  autoridade governamental competente.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Proteção de direitos:</strong> para proteger os direitos, propriedade ou 
                  segurança da S-Tech Web, nossos clientes ou terceiros.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5. Segurança dos Dados</h2>
              <p className="mb-4">
                Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações 
                pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Criptografia de dados em trânsito e em repouso;</li>
                <li>Controles de acesso rigorosos;</li>
                <li>Monitoramento contínuo de nossos sistemas;</li>
                <li>Treinamento regular de nossa equipe sobre práticas de segurança.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">6. Seus Direitos (LGPD)</h2>
              <p className="mb-4">
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), você tem os seguintes direitos 
                em relação aos seus dados pessoais:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmação da existência de tratamento de dados;</li>
                <li>Acesso aos dados pessoais;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Portabilidade dos dados a outro fornecedor;</li>
                <li>Eliminação dos dados tratados com consentimento;</li>
                <li>Informação sobre compartilhamento de dados;</li>
                <li>Revogação do consentimento a qualquer momento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">7. Cookies</h2>
              <p className="mb-4">
                Nosso site pode utilizar cookies e tecnologias similares para melhorar sua experiência de 
                navegação. Os cookies nos ajudam a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lembrar suas preferências (como tema claro/escuro);</li>
                <li>Entender como você utiliza nosso site;</li>
                <li>Melhorar a performance e funcionalidade do site.</li>
              </ul>
              <p className="mt-4">
                Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">8. Retenção de Dados</h2>
              <p>
                Mantemos suas informações pessoais pelo tempo necessário para cumprir as finalidades 
                descritas nesta política, ou conforme exigido por lei. Para dados de clientes com contratos 
                ativos, os dados são mantidos durante a vigência do contrato e pelo período legal subsequente. 
                Após esse período, os dados são excluídos ou anonimizados de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">9. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em 
                nossas práticas ou por exigências legais. Notificaremos você sobre quaisquer alterações 
                significativas publicando a nova política em nosso site e atualizando a data de última 
                atualização no topo desta página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">10. Contato</h2>
              <p className="mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade, sobre o tratamento de seus 
                dados pessoais, ou desejar exercer qualquer um dos seus direitos previstos na LGPD, 
                entre em contato conosco:
              </p>
              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">S-Tech Web</strong>
                </p>
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">Responsável:</strong> Saimo (Founder & CEO)
                </p>
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">E-mail:</strong>{" "}
                  <a 
                    href="mailto:contato@s-tech-web.com.br" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    contato@s-tech-web.com.br
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
              © {new Date().getFullYear()} S-Tech Web. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="/termos"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Termos de Uso
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
