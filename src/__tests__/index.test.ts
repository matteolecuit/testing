import { selectDrink, getIfCupInCoffeeMaker, returnTheMoney } from "..";
import * as creditCardService from "../creditCardService";
import * as coinAcceptorService from "../coinAcceptorService";
import * as coffeeMakingService from "../coffeeMakingService";
import { prepareDrink } from "../coffeeMakingService";

beforeAll(() => {
  jest
    .spyOn(creditCardService, "initCreditCardPayment")
    .mockImplementation(() => Promise.resolve(true));
  jest
    .spyOn(coinAcceptorService, "askPaymentInCash")
    .mockImplementation(() => Promise.resolve(true));
  jest
    .spyOn(coffeeMakingService, "cancelOrder")
    .mockImplementation(() => Promise.resolve());
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

test("5 - The client add money but cancel the order", async () => {
  const moneyOfTheClient = 50;
  const money = await returnTheMoney(moneyOfTheClient);
  expect(coffeeMakingService.cancelOrder).toBeCalled();
  expect(money).toBe(moneyOfTheClient);
});

test("6 - prepare drink without specifying sugar amount", async () => {
  const drink = await prepareDrink({ drink: "coffee" });

  expect(drink.sugar).toBe(0);
});
