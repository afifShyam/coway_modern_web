import { siteConfig } from '@/data/siteConfig';

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = `Hai ${siteConfig.agentName}, saya berminat nak tahu promosi Coway terkini. Boleh bantu saya?`;
  const message = customMessage || defaultMsg;
  return `${siteConfig.whatsappBaseUrl}/${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(productName: string, productCode: string, color?: string): string {
  const colorText = color ? ` pilihan warna ${color}` : '';
  const msg = `Hai ${siteConfig.agentName}, saya berminat nak tahu sebut harga rasmi & claim promosi RM20 untuk model Coway ${productName} (${productCode})${colorText}. Boleh bantu saya?`;
  return getWhatsAppUrl(msg);
}
