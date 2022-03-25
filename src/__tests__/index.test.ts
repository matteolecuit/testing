import { selectDrink, getIfCupInCoffeeMaker } from "..";
import * as creditCardService from "../creditCardService";
import * as coinAcceptorService from "../coinAcceptorService";

beforeAll(() => {
  jest
    .spyOn(creditCardService, "initCreditCardPayment")
    .mockImplementation(() => Promise.resolve(true));
  jest
    .spyOn(coinAcceptorService, "askPaymentInCash")
    .mockImplementation(() => Promise.resolve(true));
});

test("1 - If have cup on the coffee maker don't give an other cup", () => {
  const cup = true;
  const result = getIfCupInCoffeeMaker(cup);
  expect(result).toBe(cup);
});

test("2 - should send creditCardPayment request if moneyInCoinAcceptor = 0", async () => {
  const moneyInCoinAcceptor = 0;

  selectDrink({ choice: "coffee", moneyInCoinAcceptor });

  expect(creditCardService.initCreditCardPayment).toBeCalled();
});

test("4 - should send  request if moneyInCoinAcceptor = 0", async () => {
  const moneyInCoinAcceptor = 0;

  selectDrink({ choice: "coffee", moneyInCoinAcceptor });

  expect(coinAcceptorService.askPaymentInCash).toBeCalled();
});
