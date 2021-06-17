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


const rollWithSettings = (number, setting) =>{
  let number1 = randomNumber(number)
  let number2 = randomNumber(number)

  if(setting){
    return Math.max(number1, number2)
  }
  else{
    return Math.min(number1, number2)
  }
}

const dice_reducer = (state, action) => {
  if (action.type === SET_ADVANTAGE) {
    return { ...state, advantage: true, disavantage: false };
  }

  if (action.type === SET_DISAVANTAGE) {
    return { ...state, advantage: false, disavantage: true };
  }

if(action.type === RESET_ADVANTAGES){
  return {...state, advantage: false, disavantage: false}
}

  if (action.type === ROLL_DICE) {

    if(state.advantage === true){
      return {...state, advantage: false, disavantage: false, displayValue: `Advantage: ${rollWithSettings(action.payload, true)}`}
    }

    if(state.disavantage === true){
      return {...state, advantage: false, disavantage: false, displayValue: `Disavantage: ${rollWithSettings(action.payload, false)}`}
    }
    return {
      ...state,
      advantage: false,
      disavantage: false,
      displayValue: randomNumber(action.payload),
    };
  }
};

export default dice_reducer;
