import axios from "axios";
import { PaymentIntentResponse } from "../types/payment";

export default async function createPaymentIntent(
  amount: number
): Promise<string | undefined> {
  try {
    const { data } = await axios.post<PaymentIntentResponse>(
      `${process.env.REACT_APP_API_URL}/api/payment-intents/new`,
      { amount }
    );
    return data.paymentIntent;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(`AXIOS ERROR: ${error}`);
      return undefined;
    } else {
      console.log("PAYMENT INTENT ERROR: ", error);
      return undefined;
    }
  }
}
