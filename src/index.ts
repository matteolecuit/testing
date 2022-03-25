import { initCreditCardPayment } from "./creditCardService";

console.log("hello world");

interface SelectDrinkProps {
  choice: string;
  moneyInCoinAcceptor: number;
}

export const selectDrink = async (props: SelectDrinkProps) => {
  await initCreditCardPayment();
};
