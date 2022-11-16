import ErrorScreen from "../components/home/ErrorScreen";
import ProductList from "../components/home/ProductList";
import { useGetProducts } from "../hooks/use_fetch_products";

function HomePage() {
  const { products, loading, error } = useGetProducts();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <>
      <div className="flex items-start justify-center">
        <ProductList products={products!} />
      </div>
    </>
  );
}

export default HomePage;
