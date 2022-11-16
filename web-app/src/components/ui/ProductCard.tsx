import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { Product } from "../../types/product";

interface PageLayoutInterface {
  product: Product;
}

function ProductCard(props: PageLayoutInterface): JSX.Element {
  const { product } = props;

  return (
    <div className="product_card px-4 bg-white w-[200px] h-[400px] shadow-sm flex flex-col items-center justify-between hover:shadow-md mb-4 rounded-lg">
      {/* Img */}
      <img
        src={`${product.image}`}
        alt="product"
        className="lg:w-[200px] lg:[200px] w-[150px] h-[150px] object-contain my-4"
      />

      {/* Info */}
      <div className="px-4 w-[200px]">
        <h2 className="text-[15px] font-medium max-h-9 truncate text-b3">
          {product.title}
        </h2>
        <p className="price font-medium text-[15px] text-center">
          ${product.price}
        </p>
      </div>

      {/* Button */}
      <Button
        startIcon={<ShoppingCartIcon />}
        variant="contained"
        color="info"
        sx={{ mb: 2 }}
      >
        Add To Cart
      </Button>
    </div>
  );
}

export default ProductCard;
