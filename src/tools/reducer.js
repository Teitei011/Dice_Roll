import {
  SET_ADVANTAGE,
  SET_DISAVANTAGE,
  ROLL_DICE,
  RESET_ADVANTAGES,
} from "./actions";

const randomNumber = (number) => {
  let random = Number(Math.floor(Math.random() * number));
  console.log(`Random Number: ${random}`);
  return random;
};

const dice_reducer = (state, action) => {
  if (action.type === SET_ADVANTAGE) {
    console.log("ADVANTAGE");
    return { ...action, advantage: true, disavantage: false };
  }

  if (action.type === SET_DISAVANTAGE) {
    console.log("DISAVANTAGE");

    return { ...action, advantage: false, disavantage: true };
  }

  if (action.type === ROLL_DICE) {
    return {
      ...state,
      advantage: true,
      disavantage: false,
      displayValue: randomNumber(action.payload),
    };
  }
};

export default dice_reducer;
