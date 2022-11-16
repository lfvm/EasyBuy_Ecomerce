import express, { Express } from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
dotenv.config();

//Initialize app
const app: Express = express();
const cors = require("cors");
const port = process.env.PORT;
app.use(cors());
app.use(express.json());


//Initialize stripe
export const stripe = new Stripe(process.env.STRIPE_SK!, {
  apiVersion: "2022-11-15",
});

// Routes
app.use("/api/products", require("./routes/product_routes"));
app.use("/api/payment-intents", require("./routes/payment_routes"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
