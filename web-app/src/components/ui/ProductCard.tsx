import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";

function ProductCard(): JSX.Element {
  return (
    <div className="product_card px-4 bg-white w-[200px] h-fit shadow-sm flex flex-col items-center justify-between hover:shadow-md mb-4 rounded-lg">
      {/* Img */}
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="product"
        className="lg:w-full lg:h-full w-[150px] h-[150px] object-contain mt-4"
      />

      {/* Info */}
      <div className="info px-2 py-4">
        <h2 className="text-[15px] font-medium overflow-hidden max-h-9 text-b3">
          Very Cool Product
        </h2>
        <p className="price font-medium text-[15px]">$59.99</p>
      </div>

      {/* Button */}
      <Button
        startIcon={<ShoppingCartIcon />}
        variant="contained"
        color="info"
        sx={{ my: 2 }}
      >
        Add To Cart
      </Button>
    </div>
  );
}

export default ProductCard;
