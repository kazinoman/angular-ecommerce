import { IProducts } from 'src/app/products/type/products.type';

export function productExistsInArray(
  products: IProducts[],
  productId: number
): boolean {
  return products.some((product) => product.id === productId);
}
