import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import {
  SET_ADVANTAGE,
  SET_DISAVANTAGE,
  ROLL_DICE,
  RESET_ADVANTAGES,
} from "./actions";

const initialState = {
  displayValue: 0,
  advantage: false,
  disavantage: false,
};

const DicesContext = React.createContext();

export const DicesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAdvantage = () => {
    dispatch({ type: SET_ADVANTAGE });
  };

  const setDisavantage = () => {
    dispatch({ type: SET_DISAVANTAGE });
  };

  const setRollDice = (value) => {
    console.log(`Payload: ${value}`)
    dispatch({ type: ROLL_DICE, payload: value });
  };

  const setReset = () => {
    dispatch({ type: RESET_ADVANTAGES });
  };

  return (
    <DicesContext.Provider
      value={{ ...state, setAdvantage, setDisavantage, setRollDice, setReset }}
    >
      {children}
    </DicesContext.Provider>
  );
};


export const useDicesContext = () =>{
    return useContext(DicesContext)
}