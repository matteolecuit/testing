export const cancelOrder = async () => {
  return;
};

interface DrinkPreparation {
  drink: string;
  sugar?: number;
}

interface Drink {
  drink: string;
  sugar: number;
  cup: boolean;
}

export const prepareDrink = async (props: DrinkPreparation) => {
  const drink: Drink = {
    drink: props.drink,
    sugar: props.sugar ?? 0,
    cup: true,
  };
  return drink;
};
