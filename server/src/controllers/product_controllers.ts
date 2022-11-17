import { Request, Response } from "express";
import { Product } from "../types/product";
import axios from "axios";

const getProducts = async (req: Request, res: Response) => {
  try {
    const { sort } = req.query;
    const { data, status } = await axios.get<Product[]>(
      "https://fakestoreapi.com/products?limit=20"
    );

    if (status !== 200) {
      return res.status(status).json({
        msg: "An error ocurred while fetching products from api ",
      });
    }

    return res.status(200).json({
      msg: "Obtained products successfully",
      products:
        !sort || sort === "asc"
          ? data.sort((a, b) => a.price - b.price)
          : data.sort((a, b) => b.price - a.price),
    });
  } catch (error) {
    console.log("GET PRODUCTS ERROR:", error);
    res.status(500).json({
      msg: "An error ocurred while fetching products",
    });
  }
};

export { getProducts };
