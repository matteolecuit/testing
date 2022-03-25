import { cancelOrder } from "./coffeeMakingService";
import { askPaymentInCash } from "./coinAcceptorService";
import { initCreditCardPayment } from "./creditCardService";

interface SelectDrinkProps {
  choice: string;
  moneyInCoinAcceptor: number;
}

export const getIfCupInCoffeeMaker = (cup: boolean) => {
  return cup;
};

export const selectDrink = async (props: SelectDrinkProps) => {
  await Promise.all([initCreditCardPayment(), askPaymentInCash()]);
};

export const returnTheMoney = async (money: number) => {
  await cancelOrder();
  return money;
};

export const buyTheCoffee = async (priceOfTheCoffee: number, moneyOfTheClient: number) => {
  return moneyOfTheClient - priceOfTheCoffee;
};
