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
    getProducts().then((apiProducts) =>
      setState({
        products:
          filter === "desc"
            ? apiProducts!.sort((a, b) => b.price - a.price)
            : apiProducts!.sort((a, b) => a.price - b.price),
        loading: false,
        error: apiProducts !== null ? false : true,
      })
    );
  }, [filter]);

  return state;
};
