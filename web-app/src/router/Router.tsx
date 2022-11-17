import { Routes, Route } from "react-router-dom";
import PageLayout from "../components/Layout/PageLayout";
import Cart from "../pages/Cart";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import PaymentError from "../pages/PaymentError";
import PaymentScreen from "../pages/PaymentPage";
import SuccessfullPayment from "../pages/SuccesfullPayment";
import InitialRoute from "./InitialRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<InitialRoute />} />
      <Route path="*" element={<NotFound />} />
      <Route path="shop" element={<PageLayout Page={HomePage} />} />
      <Route path="cart" element={<PageLayout Page={Cart} />} />
      <Route path="checkout" element={<PageLayout Page={PaymentScreen} />} />
      <Route
        path="success"
        element={<PageLayout Page={SuccessfullPayment} />}
      />
      <Route
        path="payment-error"
        element={<PageLayout Page={PaymentError} />}
      />
    </Routes>
  );
}
