import { initCreditCardPayment } from "./creditCardService";

interface SelectDrinkProps {
  choice: string;
  moneyInCoinAcceptor: number;
}

export const getIfCupInCoffeeMaker = (cup: boolean) => {
  return cup;
};

export const selectDrink = async (props: SelectDrinkProps) => {
  await initCreditCardPayment();
};
