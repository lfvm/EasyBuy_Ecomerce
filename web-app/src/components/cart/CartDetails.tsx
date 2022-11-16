import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

function CartDetails() {
  const { cart } = useAppContext();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Gets cart ammount every time the cart changes
  useEffect(() => {
    let price: number = 0;
    cart.forEach((item) => (price += item.product.price * item.quantity));
    setTotalPrice(price);
  }, [cart]);

  return (
    <div className="mx-4 order bg-white h-[200px] lg:w-[450px] w-full rounded-lg p-4 flex flex-col items-center justify-around">
      <h1 className="text-center text-xl font-medium">Your order details:</h1>
      <div className="order-data flex items-center justify-center w-full flex-col divide-y-2 font-medium text-[15px]">
        <div className="flex w-full items-center justify-between p-1">
          <p>Subtotal</p>
          <p>${totalPrice}</p>
        </div>
        <div className="flex w-full items-center justify-between p-1 text-[red]">
          <p>Discounts</p>
          <p>$0.00</p>
        </div>
        <div className="flex w-full items-center justify-between p-1 text-[green]">
          <p>Total</p>
          <p>${totalPrice}</p>
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
  );
}

export default CartDetails;
