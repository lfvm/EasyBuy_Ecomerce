import { Request, Response } from "express";
import { Product } from "../types/product";
import axios from "axios";

const getProducts = async (req: Request, res: Response) => {
  try {
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
      products: data,
    });
  } catch (error) {
    console.log("GET AREAS ERROR:", error);
    res.status(500).json({
      msg: "Hubo un error obteniendo las áreas",
    });
  }
};

export { getProducts };
