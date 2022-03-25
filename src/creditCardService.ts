import { cancelOrder } from "./coffeeMakingService";

export const initCreditCardPayment = async () => {
  console.log("init payment by card");
  await cancelOrder();
  return false;
};
