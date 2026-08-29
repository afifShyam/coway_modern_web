export type ProductCategory = 
  | 'all'
  | 'water' 
  | 'air' 
  | 'relax'
  | 'berex' 
  | 'aircond' 
  | 'refrigerator' 
  | 'bathroom';

export interface ColorVariant {
  name: string;
  colorHex: string;
  image: string;
}

export interface TankCapacity {
  hot?: string;
  cold?: string;
  ambient?: string;
  ice?: string;
  total?: string;
}

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
  colorVariants?: ColorVariant[];
  tankCapacity?: TankCapacity;
  dimensions?: string;
  powerConsumption?: string;
  filtrationStages?: string;
  keyFeatures?: string[];
  videoUrl?: string;
  videoTitle?: string;
}

export interface CategoryTab {
  id: ProductCategory;
  label: string;
  icon: string;
  count: number;
}
