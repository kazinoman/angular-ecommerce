export interface IProducts {
  id: number;
  creationAt: Date;
  updatedAt: Date;
  description: string;
  price: number;
  title: string;
  images: string[];
  category: ICategory;
  length?: number;
}

export interface ICategory {
  id: number;
  image: string;
  name: string;
  updateAt?: Date;
  creationAt?: Date;
}
