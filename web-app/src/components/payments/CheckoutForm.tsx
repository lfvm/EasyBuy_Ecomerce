import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface PageLayoutInterface {
  amount: number;
  isLoading: boolean;
}

function CheckoutForm(props: PageLayoutInterface) {
  const navigate = useNavigate();
  const { amount, isLoading } = props;

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded
      return;
    }

    const result: any = await stripe.confirmPayment({
      // `Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success",
      },
    });

    if (result.error) {
      navigate(`/payment-error?amount=${amount}`);
      toast.error(result.error.message);
    } else {
      toast.success("Se realizo el pago correctamente");
    }
  };

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div className="flex w-full h-screen items-center justify-around flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 m-4 flex items-center flex-col  h-[500px]">
        <img
          src="/imgs/payment.png"
          alt="pay"
          className="w-[400px] h-[400px] object-contain"
        />
        <h2 className="text-center text-2xl font-medium">
          Thanks for Shopping with us!
        </h2>
      </div>
      <form
        className="flex items-center justify-center  flex-col m-4 lg:w-1/2 w-full h-[500px]"
        onSubmit={handleSubmit}
      >
        <PaymentElement className="w-full" />
        <Button
          variant="contained"
          size="large"
          disabled={!stripe || isLoading}
          onClick={handleSubmit}
          sx={{ my: 4 }}
          fullWidth
          className="pay-btn"
        >
          pay ${amount}
        </Button>
      </form>
    </div>
  );
}

export default CheckoutForm;
