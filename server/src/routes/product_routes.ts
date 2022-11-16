import { Router } from "express";
import { getProducts } from "../controllers/product_controllers";

const router = Router();

router.get("/", getProducts);

module.exports = router;
