import CartProductContainer from "../components/cart/CartProductContainer";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Button from "@mui/material/Button";
import { useAppContext } from "../context/AppContext";
import EmptyCart from "../components/cart/EmptyCart";

function Cart() {
  const { cart } = useAppContext();

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex lg:items-start items-center justify-between w-full flex-col lg:flex-row">
          <div className="mx-4 border lg:p-4 p-1 bg-white lg:h-fit h-[400px] mb-4 overflow-y-auto rounded-lg w-full">
            <h1 className="p-4 text-xl font-medium">Your Products:</h1>
            {cart.map((cartProduct) => (
              <CartProductContainer cartProduct={cartProduct} />
            ))}
          </div>
          <div className="mx-4 order bg-white h-[200px] lg:w-[450px] w-full rounded-lg p-4 flex flex-col items-center justify-around">
            <h1 className="text-center text-xl font-medium">
              Your order details:
            </h1>
            <div className="order-data flex items-center justify-center w-full flex-col divide-y-2 font-medium text-[15px]">
              <div className="flex w-full items-center justify-between p-1">
                <p>Subtotal</p>
                <p>$59.99</p>
              </div>
              <div className="flex w-full items-center justify-between p-1 text-[red]">
                <p>Discounts</p>
                <p>$0.00</p>
              </div>
              <div className="flex w-full items-center justify-between p-1 text-[green]">
                <p>Total</p>
                <p>$59.99</p>
              </div>
            </div>
            <Button
              startIcon={<AttachMoneyIcon />}
              variant="contained"
              color="info"
              sx={{ mb: 2 }}
            >
              Go to Checkout
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
