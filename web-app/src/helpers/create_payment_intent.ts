import axios from "axios";
import { PaymentIntentResponse } from "../types/payment";


export default async function createPaymentIntent(ammount : number): Promise<string | null | undefined> {
  try {
    const { data } = await axios.post<PaymentIntentResponse>(
      `${process.env.REACT_APP_API_URL}/api/payment-intents/new`,
      { ammount },
    );

    return data.paymentIntent;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("AXIOS ERROR: API OFFLINE");
      return null;
    } else {
      console.log("PAYMENT INTENT ERROR: ", error);
      return null;
    }
  }
}
