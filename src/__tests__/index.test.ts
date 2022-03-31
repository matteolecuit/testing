import {
  selectDrink,
  getIfCupInCoffeeMaker,
  returnTheMoney,
  buyTheCoffee,
} from "..";
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

test("2 - Should send creditCardPayment request if moneyInCoinAcceptor = 0", async () => {
  const moneyInCoinAcceptor = 0;

  selectDrink({ choice: "coffee", moneyInCoinAcceptor });

  expect(creditCardService.initCreditCardPayment).toBeCalled();
});

test("4 - Should send  request if moneyInCoinAcceptor = 0", async () => {
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

test("7 - Client select the coffee, return the money difference", async () => {
  const moneyOfTheClient = 50;
  const priceOfTheCoffee = 40;
  const returnMoney = await buyTheCoffee(priceOfTheCoffee, moneyOfTheClient);
  expect(returnMoney).toBe(10);
});

test("Feature 1 - prepare drink without specifying sugar amount", async () => {
  const drink = await prepareDrink({ drink: "coffee" });

  expect(drink.sugar).toBe(0);
});

test("Feature 1 - prepare drink with sugar = 0", async () => {
  const drink = await prepareDrink({ drink: "coffee", sugar: 0 });

  expect(drink.sugar).toBe(0);
});

test("Feature 1 = prepare drink with sugar = 3", async () => {
  const drink = await prepareDrink({ drink: "coffee", sugar: 3 });
  expect(drink.sugar).toBe(3);
});

test("Feature 1 - prepare drink with sugar > 5", async () => {
  const drink = await prepareDrink({ drink: "coffee", sugar: 6 });
  expect(drink.sugar).toBe(5);
});

test("Feature 1 - prepare drink with sugar < 0", async () => {
  const drink = await prepareDrink({ drink: "coffee", sugar: -3 });

  expect(drink.sugar).toBe(0);
});
