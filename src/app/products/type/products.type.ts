export interface IProducts {
  id: number;
  createdOn: Date;
  description: string;
  price: number;
  title: string;
  images: string[];
  category: {
    id: number;
    image: string;
    name: string;
    updateAt: Date;
    creationAt: Date;
  };
  length: number;
}
