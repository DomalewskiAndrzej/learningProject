export interface Recipe {
  title: string;
  ingredients: [{ name: string; weight: number }];
  description: string[];
  src: string;
  alt: string;
  time: number;
  portions: number;
  id?: number;
}
