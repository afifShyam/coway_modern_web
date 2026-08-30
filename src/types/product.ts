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
  weight?: string;
  coverageArea?: string;
  temperatureOptions?: string;
  serviceInterval?: string;
  certifications?: string[];
  idealFor?: string;
  powerConsumption?: string;
  filtrationStages?: string;
  keyFeatures?: string[];
  videoUrl?: string;
  youtubeId?: string;
  videoTitle?: string;
  emallUrl?: string;
}

export interface CategoryTab {
  id: ProductCategory;
  label: string;
}
