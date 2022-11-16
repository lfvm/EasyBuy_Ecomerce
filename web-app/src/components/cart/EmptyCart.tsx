import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/imgs/empty-cart.png"
        alt="product"
        className="w-[300px] h-[300px] object-contain mt-12"
      />
      <h1>You currently don't have any items in your cart</h1>
      <NavLink to="/shop">
        <Button
          startIcon={<ShoppingCartIcon />}
          variant="contained"
          color="info"
          sx={{ mt: 2 }}
        >
          Go Shopping
        </Button>
      </NavLink>
    </div>
  );
}

export default EmptyCart;
