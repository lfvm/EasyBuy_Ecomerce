import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="/imgs/404-img.png"
        alt="not-found"
        className="w-[300px] h-[300px] object-contain"
      />
      <h1>Oops! the page that you are trying to reach does not exists</h1>
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

export default NotFound;
