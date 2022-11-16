import React from "react";
import { Product } from "../../types/product";
import ProductCard from "../ui/ProductCard";

interface PageLayoutInterface {
  products: Product[];
}

function ProductList(props: PageLayoutInterface) {
  const { products } = props;
  return (
    <div className="grid gap-1 grid-cols-2 lg:grid-cols-4 md:grid-cols-4">
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
