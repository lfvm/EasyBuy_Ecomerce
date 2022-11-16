export interface Product {
  id: number;
  price: number;
  image?: string | undefined | null;
  title: string;
}

export interface GetProductResponse {
  msg: string;
  products: Product[];
}

export interface CartPoduct {
  product: Product;
  quantity: number;
}
