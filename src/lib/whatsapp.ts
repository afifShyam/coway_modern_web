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

export function getProductEmallUrl(emallUrlOrSlug?: string): string {
  if (!emallUrlOrSlug) {
    return siteConfig.emallUrl;
  }
  if (emallUrlOrSlug.startsWith('http')) {
    if (emallUrlOrSlug.includes('agentcode=')) {
      return emallUrlOrSlug;
    }
    const separator = emallUrlOrSlug.includes('?') ? '&' : '?';
    return `${emallUrlOrSlug}${separator}agentcode=${siteConfig.hpCode}`;
  }
  return `https://emall.coway.com.my/product/${emallUrlOrSlug}?agentcode=${siteConfig.hpCode}`;
}
