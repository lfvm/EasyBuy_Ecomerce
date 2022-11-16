import axios from "axios";
import { GetProductResponse, Product } from "../types/product";

export default async function getProducts(): Promise<Product[]> {
  try {
    const { data, status } = await axios.get<GetProductResponse>(
      `${process.env.REACT_APP_API_URL}/api/products`
    );

    if (status === 200) {
      return data.products;
    }
    return [];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("AXIOS ERROR: ", error.message);
      return [];
    } else {
      console.log("GET PRODUCTS ERROR: ", error);
      return [];
    }
  }
}
