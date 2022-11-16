import { useAppContext } from "../context/AppContext";
import EmptyCart from "../components/cart/EmptyCart";
import CartDetails from "../components/cart/CartDetails";
import CartItems from "../components/cart/CartItems";

function Cart() {
  const { cart } = useAppContext();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex lg:items-start items-center justify-between w-full flex-col lg:flex-row">
      <CartItems />
      <CartDetails />
    </div>
  );
}

export default Cart;
