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
  let sugar = 0;

  if (props.sugar) {
    if (props.sugar < 0) sugar = 0;
    else if (props.sugar >= 5) sugar = 5;
    else sugar = props.sugar;
  }

  const drink: Drink = {
    drink: props.drink,
    sugar: sugar,
    cup: true,
  };

  return drink;
};
