export const askPaymentInCash = async () => {
  console.log("init payment in cash");
  return false;
};

export const isCoinValid = (amountInCents: number) => {
  switch (amountInCents) {
    case 5:
      return true;
    case 10:
      return true;
    case 20:
      return true;
    case 50:
      return true;
    case 100:
      return true;
    case 200:
      return true;
    default:
      return false;
  }
};
