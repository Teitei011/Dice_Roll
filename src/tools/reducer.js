import {
  SET_ADVANTAGE,
  SET_DISAVANTAGE,
  ROLL_DICE,
  RESET_ADVANTAGES,
} from "./actions";

const randomNumber = (number) => {
  let random = Number(Math.floor(Math.random() * (number + 1)));
  return random;
};

const dice_reducer = (state, action) => {
  if (action.type === SET_ADVANTAGE) {
    return { ...state, advantage: true, disavantage: false };
  }

  if (action.type === SET_DISAVANTAGE) {
    return { ...state, advantage: false, disavantage: true };
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
