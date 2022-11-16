import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
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
      <div className="flex items-center justify-center flex-col">
        <div className="filter-bar w-full ml-auto mr-auto border bg-white rounded-lg mb-4 flex items-center justify-between p-4">
          <h2>Filter price: </h2>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="ascending"
                control={<Radio />}
                label="ascending"
              />
              <FormControlLabel
                value="descending"
                control={<Radio />}
                label="descending"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <ProductList products={products!} />
      </div>
    </>
  );
}

export default HomePage;
