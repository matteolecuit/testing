import { cancelOrder } from "./coffeeMakingService";

export const initCreditCardPayment = async () => {
  console.log("init payment");
  await cancelOrder();
  return false;
};
