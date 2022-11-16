import ProductCard from "../components/ui/ProductCard";
import { useGetProducts } from "../hooks/use_fetch_products";

function HomePage() {
  const { products, loading } = useGetProducts();
  return (
    <>
      <div className="flex items-start justify-center">
        {loading === true ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-1 grid-cols-2 lg:grid-cols-4 md:grid-cols-4">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
