/**
 * Utility functions for parsing, formatting, and calculating Coway product prices.
 */

/**
 * Extracts a numeric value from a price string (e.g., 'RM74.00' -> 74, 'RM4,200' -> 4200).
 */
export function parsePrice(priceStr: string | number | undefined | null): number {
  if (!priceStr) return 0;
  if (typeof priceStr === 'number') return priceStr;
  const cleaned = priceStr.replace(/[^0-9.]/g, '');
  return parseFloat(cleaned) || 0;
}

/**
 * Calculates the estimated daily cost based on a 30-day month.
 * e.g., 'RM74.00' -> '2.47' (or rounded to 2 decimal places)
 */
export function calculateDailyCost(monthlyPriceStr: string | number): string {
  const monthly = parsePrice(monthlyPriceStr);
  if (monthly <= 0) return '0.00';
  return (monthly / 30).toFixed(2);
}

export function getDailyEstimate(monthlyPriceStr: string | number): string {
  return `RM${calculateDailyCost(monthlyPriceStr)}`;
}

/**
 * Formats a number as Malaysian Ringgit string (e.g., 74 -> 'RM74', 4200 -> 'RM4,200').
 */
export function formatRinggit(amount: number): string {
  return `RM${amount.toLocaleString('en-MY')}`;
}

/**
 * Calculates total savings during the introductory promotional period.
 * e.g., regular RM74, promo RM20 for 7 months -> (74 - 20) * 7 = RM378 saved
 */
export function calculatePromoTotalSavings(
  regularMonthlyStr: string,
  promoMonthlyStr: string,
  promoMonthsStr: string
): number {
  const reg = parsePrice(regularMonthlyStr);
  const promo = parsePrice(promoMonthlyStr);
  const months = parsePrice(promoMonthsStr);
  if (reg <= promo || months <= 0) return 0;
  return (reg - promo) * months;
}
