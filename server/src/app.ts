import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const cors = require("cors");
const port = process.env.PORT;
app.use(cors());

app.use("/api/products", require("./routes/product_routes"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
