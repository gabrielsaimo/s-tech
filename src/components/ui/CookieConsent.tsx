"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cookie, 
  X, 
  Shield, 
  BarChart3, 
  Megaphone, 
  Settings2, 
  Check,
  ChevronDown,
  ChevronUp,
  Lock,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const COOKIE_CONSENT_KEY = "s-tech-web-cookie-consent";
const COOKIE_PREFERENCES_KEY = "s-tech-web-cookie-preferences";

const defaultPreferences: CookiePreferences = {
  necessary: true, // Sempre true, não pode ser desabilitado
  analytics: false,
  marketing: false,
  preferences: false,
};

const cookieCategories = [
  {
    id: "necessary",
    name: "Cookies Essenciais",
    description: "Necessários para o funcionamento básico do site. Incluem cookies de sessão, segurança e preferências essenciais.",
    icon: Shield,
    required: true,
    examples: ["Autenticação", "Segurança", "Sessão do usuário"],
  },
  {
    id: "analytics",
    name: "Cookies de Analytics",
    description: "Nos ajudam a entender como você usa o site, permitindo melhorar continuamente sua experiência.",
    icon: BarChart3,
    required: false,
    examples: ["Google Analytics", "Vercel Analytics", "Métricas de uso"],
  },
  {
    id: "marketing",
    name: "Cookies de Marketing",
    description: "Utilizados para mostrar anúncios relevantes e medir a eficácia de campanhas publicitárias.",
    icon: Megaphone,
    required: false,
    examples: ["Google Ads", "Facebook Pixel", "Remarketing"],
  },
  {
    id: "preferences",
    name: "Cookies de Preferências",
    description: "Permitem que o site lembre suas escolhas, como idioma, região e configurações de exibição.",
    icon: Settings2,
    required: false,
    examples: ["Tema (claro/escuro)", "Idioma", "Layout preferido"],
  },
];

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar se já existe consentimento salvo
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

    if (savedConsent) {
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
      setIsVisible(false);
      setIsLoading(false);
    } else {
      // Aguardar um pouco antes de mostrar o banner
      setIsLoading(false);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowSettings(false);

    // Disparar evento customizado para outras partes do app
    window.dispatchEvent(new CustomEvent("cookieConsentUpdate", { detail: prefs }));
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    savePreferences(allAccepted);
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    savePreferences(onlyNecessary);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  const toggleCategory = (categoryId: string) => {
    if (categoryId === "necessary") return; // Não pode desabilitar necessários
    setPreferences(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId as keyof CookiePreferences],
    }));
  };

  if (isLoading) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay escuro quando as configurações estão abertas */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
              onClick={() => setShowSettings(false)}
            />
          )}

          {/* Banner Principal */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto">
              {/* Card do Banner */}
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl md:rounded-3xl shadow-2xl shadow-gray-900/20 dark:shadow-black/40 border border-gray-200 dark:border-gray-800 overflow-hidden">
                {/* Gradient decorativo */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />
                
                {/* Efeito de brilho */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative p-6 md:p-8">
                  {!showSettings ? (
                    /* Vista Principal */
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      {/* Ícone e Texto */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/30">
                            <Cookie className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                              <Cookie className="w-5 h-5 sm:hidden text-primary-500" />
                              Sua privacidade é importante
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                              Utilizamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdo. 
                              Você pode escolher quais cookies aceitar.{" "}
                              <Link 
                                href="/privacidade" 
                                className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center gap-1"
                              >
                                Saiba mais
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Botões */}
                      <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setShowSettings(true)}
                          className="px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                        >
                          <Settings2 className="w-4 h-4" />
                          Configurar
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={rejectAll}
                          className="px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          Rejeitar
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={acceptAll}
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all flex items-center justify-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          Aceitar Todos
                        </motion.button>
                      </div>
                    </div>
                  ) : (
                    /* Vista de Configurações */
                    <div>
                      {/* Header das Configurações */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                            <Settings2 className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              Configurações de Cookies
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Personalize sua experiência
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowSettings(false)}
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <X className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>

                      {/* Lista de Categorias */}
                      <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                        {cookieCategories.map((category) => {
                          const Icon = category.icon;
                          const isExpanded = expandedCategory === category.id;
                          const isEnabled = preferences[category.id as keyof CookiePreferences];

                          return (
                            <div
                              key={category.id}
                              className={`rounded-xl border transition-all ${
                                isEnabled
                                  ? "border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/20"
                                  : "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50"
                              }`}
                            >
                              {/* Cabeçalho da Categoria */}
                              <div className="flex items-center gap-4 p-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                  isEnabled 
                                    ? "bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400"
                                    : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                                }`}>
                                  <Icon className="w-5 h-5" />
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-semibold text-gray-900 dark:text-white">
                                      {category.name}
                                    </h4>
                                    {category.required && (
                                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                        <Lock className="w-3 h-3" />
                                        Obrigatório
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                                    {category.description}
                                  </p>
                                </div>

                                <div className="flex items-center gap-3">
                                  {/* Toggle Switch */}
                                  <button
                                    onClick={() => toggleCategory(category.id)}
                                    disabled={category.required}
                                    className={`relative w-12 h-7 rounded-full transition-colors ${
                                      isEnabled
                                        ? "bg-primary-500"
                                        : "bg-gray-300 dark:bg-gray-600"
                                    } ${category.required ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
                                  >
                                    <motion.div
                                      animate={{ x: isEnabled ? 22 : 2 }}
                                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                      className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
                                    />
                                  </button>

                                  {/* Expand Button */}
                                  <button
                                    onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                                    className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                  >
                                    {isExpanded ? (
                                      <ChevronUp className="w-4 h-4 text-gray-500" />
                                    ) : (
                                      <ChevronDown className="w-4 h-4 text-gray-500" />
                                    )}
                                  </button>
                                </div>
                              </div>

                              {/* Detalhes Expandidos */}
                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-4 pb-4 pt-0">
                                      <div className="pl-14">
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                          {category.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                          {category.examples.map((example) => (
                                            <span
                                              key={example}
                                              className="px-3 py-1 text-xs rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                                            >
                                              {example}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>

                      {/* Footer das Configurações */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={rejectAll}
                          className="flex-1 px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          Rejeitar Opcionais
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={saveCustomPreferences}
                          className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all flex items-center justify-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          Salvar Preferências
                        </motion.button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Hook para verificar consentimento de cookies em outros componentes
export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }

    const handleUpdate = (event: CustomEvent<CookiePreferences>) => {
      setPreferences(event.detail);
    };

    window.addEventListener("cookieConsentUpdate", handleUpdate as EventListener);
    return () => {
      window.removeEventListener("cookieConsentUpdate", handleUpdate as EventListener);
    };
  }, []);

  return {
    hasConsent: preferences !== null,
    preferences,
    canUseAnalytics: preferences?.analytics ?? false,
    canUseMarketing: preferences?.marketing ?? false,
    canUsePreferences: preferences?.preferences ?? false,
  };
}
