import { useState, useEffect } from "react";
import getProducts from "../helpers/get_products";
import { Product } from "../types/product";

interface State {
  products?: Product[] | null;
  loading: boolean;
  error: boolean;
}

export const useGetProducts = () => {
  const [state, setState] = useState<State>({
    products: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    getProducts().then((apiProducts) =>
      setState({
        products: apiProducts,
        loading: false,
        error: apiProducts !== null ? false : true,
      })
    );
  }, []);

  return state;
};
