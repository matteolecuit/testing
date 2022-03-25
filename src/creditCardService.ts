import { cancelOrder } from "./coffeMakingService";

export const initCreditCardPayment = async () => {
  await cancelOrder()
  return false;
};
