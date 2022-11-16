import { useState, useEffect } from "react";
import getProducts from "../helpers/get_products";
import { Product } from "../types/product";

interface State {
  products: Product[];
  loading: boolean;
}

export const useGetProducts = () => {
  const [state, setState] = useState<State>({
    products: [],
    loading: true,
  });

  useEffect(() => {
    getProducts().then((apiProducts) =>
      setState({
        products: apiProducts,
        loading: false,
      })
    );
  }, []);

  return state;
};
