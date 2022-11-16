import { useState } from "react";
import ErrorScreen from "../components/home/ErrorScreen";
import FilterBar from "../components/home/FilterBar";
import ProductList from "../components/home/ProductList";
import { useProducts } from "../hooks/use_products";

function HomePage() {
  const [filter, setFilter] = useState<string>("desc");

  const { products, loading, error } = useProducts(filter);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <FilterBar setFilter={setFilter} filter={filter} />
        <ProductList products={products!} />
      </div>
    </>
  );
}

export default HomePage;
