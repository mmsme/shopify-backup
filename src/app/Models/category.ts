import { SubCategory } from './SubCategory';
export interface Category {
  categoryId: any;
  name: string;
  cratedAt: any;
  updatedAt: any;
  isDeleted: any;
  subCategories: SubCategory[];
  image: string;
}
