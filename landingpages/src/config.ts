/**
 * ============================================================
 *  CONFIGURAÇÕES EDITÁVEIS — altere aqui os seus dados reais
 * ============================================================
 *  Todos os botões de WhatsApp da página usam estas informações.
 *  Campos deixados em branco ("") não são exibidos no rodapé.
 */
export const SITE = {
  /** EDITAR: seu nome ou nome da sua marca pessoal. */
  brandName: "Ronaldo Gonçalves",

  /** Descrição curta exibida ao lado do nome. */
  brandRole: "Páginas de vendas",

  /**
   * EDITAR: número do WhatsApp com código do país e DDD, apenas dígitos.
   * Exemplo (fictício, apenas formato): "5511999999999"
   * Enquanto estiver vazio, os botões abrem o WhatsApp sem um contato definido.
   */
  whatsappNumber: "5575998955411",

  /** EDITAR (opcional): e-mail de contato. Ex.: "contato@seudominio.com.br" */
  email: "",

  /** EDITAR (opcional): link completo do seu Instagram. Ex.: "https://instagram.com/seuperfil" */
  instagram: "",

  /** EDITAR (opcional): link completo do seu LinkedIn. */
  linkedin: "",

  /** EDITAR (opcional): cidade/estado de atendimento. Ex.: "Atendimento online para todo o Brasil" */
  location: "Atendimento online para todo o Brasil",
};

/** Mensagem pré-preenchida enviada no WhatsApp. */
export const WHATSAPP_MESSAGE =
  "Olá! Tenho interesse em criar uma página de vendas para o meu negócio. Gostaria de entender como funciona o serviço e solicitar um orçamento.";

export const hasWhatsAppNumber = SITE.whatsappNumber.replace(/\D/g, "").length >= 10;

export function buildWhatsAppUrl(message: string = WHATSAPP_MESSAGE): string {
  const digits = SITE.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return digits ? `https://wa.me/${digits}?text=${text}` : `https://wa.me/?text=${text}`;
}

export const NAV_LINKS = [
  { href: "#desafios", label: "Desafios" },
  { href: "#servico", label: "Serviço" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Processo" },
  { href: "#para-quem", label: "Para quem" },
  { href: "#perguntas", label: "Perguntas" },
];

export const WHATSAPP_MISSING_EVENT = "whatsapp-numero-ausente";
