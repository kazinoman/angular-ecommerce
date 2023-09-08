// export interface ICreateProduct {
//   title?: string | null | undefined;
//   price: number | null;
//   description: string | null;
//   categoryId: number | null;
//   images?: string[];
// }

export interface ICreateProduct {
  title: string | null;
  price: string | number | null; // Updated type to accept string or number
  categoryId: string | null;
  description: string | null;
  images?: string[];
}
