import { Routes, Route } from "react-router-dom";
import PageLayout from "../components/Layout/PageLayout";
import Cart from "../pages/Cart";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import InitialRoute from "./InitialRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<InitialRoute />} />
      <Route path="*" element={<NotFound />} />
      <Route path="cart" element={<PageLayout Page={Cart} />} />
      <Route path="shop" element={<PageLayout Page={HomePage} />} />
    </Routes>
  );
}
