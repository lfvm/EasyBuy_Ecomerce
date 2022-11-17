import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function SuccessfullPayment() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="/imgs/success.png"
        alt="product"
        className="w-[300px] h-[300px] object-contain"
      />
      <h1 className="text-xl mb-4">
        Congratulations! your payment was successfull
      </h1>
      <NavLink to="/shop">
        <Button
          startIcon={<ShoppingCartIcon />}
          variant="contained"
          color="info"
          sx={{ my: 2 }}
        >
          Go Shopping
        </Button>
      </NavLink>
    </div>
  );
}

export default SuccessfullPayment;
