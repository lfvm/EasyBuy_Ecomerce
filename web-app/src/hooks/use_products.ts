import { useState, useEffect } from "react";
import getProducts from "../helpers/get_products";
import { Product } from "../types/product";

interface State {
  products?: Product[] | null;
  loading: boolean;
  error: boolean;
}

export const useProducts = (filter: string) => {
  const [state, setState] = useState<State>({
    products: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    // move state to loading whenever filtering changes
    setState({
      loading: true,
      products: [],
      error: false,
    });
    getProducts(filter).then((apiProducts) =>
      setState({
        loading: false,
        products: apiProducts,
        error: apiProducts !== null ? false : true,
      })
    );
  }, [filter]);

  return state;
};
