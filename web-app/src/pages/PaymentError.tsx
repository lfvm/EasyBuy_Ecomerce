import ReplayIcon from "@mui/icons-material/Replay";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";

function PaymentError() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);
  const [params] = useSearchParams();

  useEffect(() => {
    // dont continue if amount isnt present in query params
    const amountString = params.get("amount");
    if (!amountString) {
      navigate("/");
      return;
    }
    setAmount(Number(amountString));
  }, [params, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="/imgs/404-img.png"
        alt="product"
        className="w-[300px] h-[300px] object-contain"
      />
      <h1 className="text-xl mb-4">
        Oops! there was an error while purchasing your products
      </h1>
      <NavLink to={`/checkout?amount=${amount}`}>
        <Button
          startIcon={<ReplayIcon />}
          variant="contained"
          color="info"
          sx={{ my: 2 }}
        >
          Try it again
        </Button>
      </NavLink>
    </div>
  );
}

export default PaymentError;
