import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function CartProductContainer() {
  return (
    <div className="cart-product flex items-center justify-between p-4 border lg:w-[800px] w-[400px] bg-white rounded-md m-4 shadow-md">
      {/* Img */}
      <div className="title flex items-center">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product"
          className="lg:w-[80px] lg:h-[80px] h-[40px] w-[40px] object-contain ml-1"
        />

        <h2 className="text-[15px] font-medium max-h-9 text-b3">
          Very Cool Product
        </h2>
      </div>

      {/* ammount buttons */}
      <div className="inputs flex items-center justify-center lg:border lg:border-black ">
        <IconButton>
          <AddIcon />
        </IconButton>
        <p className="price font-medium text-[15px] mx-4">1</p>
        <IconButton>
          <RemoveIcon />
        </IconButton>
      </div>

      {/* total-price */}
      <p className="price font-medium text-[15px]">$59.99</p>
      <IconButton>
        <DeleteIcon sx={{ color: "#dc2626" }} />
      </IconButton>
    </div>
  );
}

export default CartProductContainer;
