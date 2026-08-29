import { siteConfig } from '@/data/siteConfig';

export function getWhatsAppUrl(customMessage?: string): string {
  if (!customMessage) {
    return siteConfig.whatsappDirectUrl;
  }
  return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(customMessage)}`;
}

export function getProductWhatsAppUrl(productName: string, productCode: string, color?: string): string {
  const colorText = color ? ` pilihan warna ${color}` : '';
  const msg = `Hai ${siteConfig.agentName}, saya berminat untuk mengetahui maklumat rasmi & sebut harga bagi model Coway ${productName} (${productCode})${colorText}. Boleh bantu saya?`;
  return getWhatsAppUrl(msg);
}
