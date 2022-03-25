import { selectDrink } from "..";
import * as creditCardService from "../creditCardService";

beforeAll(() => {
  jest
    .spyOn(creditCardService, "initCreditCardPayment")
    .mockImplementation(() => Promise.resolve(true));
});
test("should send creditCardPayment request if moneyInCoinAcceptor = 0", async () => {
  const moneyInCoinAcceptor = 0;

  selectDrink({ choice: "coffee", moneyInCoinAcceptor });

  expect(creditCardService.initCreditCardPayment).toBeCalled();
});
