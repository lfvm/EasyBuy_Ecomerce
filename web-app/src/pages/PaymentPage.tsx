import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import createPaymentIntent from "../helpers/create_payment_intent";
import CheckoutForm from "../components/payments/CheckoutForm";
import { useNavigate, useSearchParams } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK!, {
  locale: "en",
});

function PaymentScreen() {
  // Using params to get payment ammount
  const [params] = useSearchParams();
  const [amount, setAmount] = useState<Number>(0);
  const navigate = useNavigate();

  const [clientSecret, setClientSecret] = React.useState<string | undefined>(
    undefined
  );
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // dont continue if amount isnt present in query params
    const amountString = params.get("amount");
    if (!amountString) {
      navigate("/");
      return;
    }
    const amountNumber = Number(amountString);
    setAmount(amountNumber);

    setLoading(true);
    createPaymentIntent(amountNumber).then((secret) => {
      setClientSecret(secret);
    });
    setLoading(false);
  }, [params, navigate]);

  return (
    <div className="checkout">
      {clientSecret !== undefined ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm isLoading={loading} amount={Number(amount)} />
        </Elements>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PaymentScreen;
