import { selectDrink, getIfCupInCoffeeMaker } from "..";
import * as creditCardService from "../creditCardService";
import * as coffeeMakingService from "../coffeMakingService";
import { initCreditCardPayment} from "../creditCardService"


test('1 - If have cup on the coffee maker don\'t give an other cup', () => {
  const cup = true;
  const result = getIfCupInCoffeeMaker(cup)
  expect(result).toBe(cup);
});

beforeAll(() => {
  jest
    .spyOn(creditCardService, "initCreditCardPayment")
    .mockImplementation(() => Promise.resolve(true));
  jest
    .spyOn(coffeeMakingService, "cancelOrder")
    .mockImplementation(() => Promise.resolve());
});
test("2 - should send creditCardPayment request if moneyInCoinAcceptor = 0", async () => {
  const moneyInCoinAcceptor = 0;

  selectDrink({ choice: "coffee", moneyInCoinAcceptor });

  expect(creditCardService.initCreditCardPayment).toBeCalled();
});

test('3 - Client buy coffee by credit card and TPE refuse the payment', async () => { 

  await initCreditCardPayment()
  expect(coffeeMakingService.cancelOrder).toBeCalled();
});