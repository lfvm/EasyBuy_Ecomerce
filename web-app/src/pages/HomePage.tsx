import React from "react";
import ProductCard from "../components/ui/ProductCard";

function HomePage() {
  return (
    <>
      <div className="flex items-start justify-center">
        <div className="grid gap-1 grid-cols-2 lg:grid-cols-4 md:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default HomePage;
