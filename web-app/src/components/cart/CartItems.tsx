import { CartPoduct } from "../../types/product";
import { useAppContext } from "../../context/AppContext";
import CartProductContainer from "./CartProductContainer";

function CartItems() {
  const { cart } = useAppContext();

  return (
    <div className="mx-4 border lg:p-4 p-1 bg-white lg:h-fit h-[400px] mb-4 overflow-y-auto rounded-lg w-full">
      <h1 className="p-4 text-xl font-medium">Your Products:</h1>
      {cart.map((cartProduct: CartPoduct) => (
        <CartProductContainer cartProduct={cartProduct} />
      ))}
    </div>
  );
}

export default CartItems;
