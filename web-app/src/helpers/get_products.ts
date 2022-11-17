import axios from "axios";
import { GetProductResponse, Product } from "../types/product";

export default async function getProducts(
  sort: string
): Promise<Product[] | null> {
  try {
    const { data, status } = await axios.get<GetProductResponse>(
      `${process.env.REACT_APP_API_URL}/api/products?sort=${sort}`
    );

    if (status !== 200) {
      return null;
    }

    return data.products;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("AXIOS ERROR: API OFFLINE");
      return null;
    } else {
      console.log("GET PRODUCTS ERROR: ", error);
      return null;
    }
  }
}
