import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartPoduct } from "../../types/product";

interface PageLayoutInterface {
  cartProduct: CartPoduct;
}

function CartProductContainer(props: PageLayoutInterface) {
  const { cartProduct } = props;

  return (
    <div className="cart-product flex items-center justify-between p-4 border lg:w-[900px] w-[430px] bg-white rounded-md m-4 shadow-md">
      {/* Img */}
      <div className="title flex items-center lg:w-[400px]">
        <img
          src={cartProduct.product.image ?? ""}
          alt="product"
          className="lg:w-[80px] lg:h-[80px] h-[40px] w-[40px] object-contain ml-1"
        />

        <h2 className="text-[10px] lg:text-[15px] w-[80px] lg:w-[230px] font-medium  text-b3 truncate">
          {cartProduct.product.title}
        </h2>
      </div>

      {/* ammount buttons */}
      <div className="inputs flex items-center justify-center lg:border lg:border-black ">
        <IconButton>
          <AddIcon />
        </IconButton>
        <p className="price font-medium text-[15px] mx-4">
          {cartProduct.quantity}
        </p>
        <IconButton>
          <RemoveIcon />
        </IconButton>
      </div>

      {/* total-price */}
      <p className="price font-medium text-[15px] w-[20px]">
        ${cartProduct.product.price}
      </p>
      <IconButton>
        <DeleteIcon sx={{ color: "#dc2626" }} />
      </IconButton>
    </div>
  );
}

export default CartProductContainer;
