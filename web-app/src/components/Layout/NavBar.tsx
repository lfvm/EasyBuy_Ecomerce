import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full  p-4 flex items-center bg-b1 shadow-md justify-between">
      <NavLink to="/shop">
        <h1 className="navar-link text-3xl font-bold underline hover:text-white text-slate-200">
          OneSeven Shop
        </h1>
      </NavLink>
      <NavLink to="/cart">
        <ShoppingCartIcon sx={{ color: "white" }} />
      </NavLink>
    </div>
  );
}

export default NavBar;
