export type ProductCategory = 
  | 'all'
  | 'water' 
  | 'air' 
  | 'aircond' 
  | 'refrigerator' 
  | 'berex' 
  | 'bathroom';

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  code: string;
  filterType?: string;
  description: string;
  tags: string[];
  image: string;
  regularMonthly: string;
  promoMonthly: string;
  promoMonths: string;
  outrightPrice: string;
  badge: string;
  featured?: boolean;
}

export interface CategoryTab {
  id: ProductCategory;
  label: string;
  icon: string;
  count: number;
}
