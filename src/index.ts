import { initCreditCardPayment } from "./creditCardService";

interface SelectDrinkProps {
  choice: string;
  moneyInCoinAcceptor: number;
}

export const selectDrink = async (props: SelectDrinkProps) => {
  await initCreditCardPayment();
};
