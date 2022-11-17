import { Request, Response } from "express";
import { stripe } from "../app";

const createPaymentIntent = async (req: Request, res: Response) => {
  try {
    //Creates a new payment intent with amount passed in from the client
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseFloat(req.body.amount) * 100,
      currency: "USD",
      payment_method_types: ["card"],
    });

    res.status(200).send({
      paymentIntent: paymentIntent.client_secret,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({ success: false, error: `${error}` });
  }
};

export { createPaymentIntent };
