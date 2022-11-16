import axios from "axios";
import { GetProductResponse, Product } from "../types/product";

export default async function getProducts(): Promise<Product[]> {
  try {
    const { data } = await axios.get<GetProductResponse>(
      `${process.env.REACT_APP_API_URL}/api/products`
    );

    return data.products;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("AXIOS ERROR: API OFFLINE");
      return [];
    } else {
      console.log("GET PRODUCTS ERROR: ", error);
      return [];
    }
  }
}
