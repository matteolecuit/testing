import * as coffeeMakingService from "../coffeeMakingService";
import { initCreditCardPayment } from "../creditCardService";

beforeAll(() => {
  jest
    .spyOn(coffeeMakingService, "cancelOrder")
    .mockImplementation(() => Promise.resolve());
});

test("3 - Client buy coffee by credit card and TPE refuse the payment", async () => {
  await initCreditCardPayment();
  expect(coffeeMakingService.cancelOrder).toBeCalled();
});
