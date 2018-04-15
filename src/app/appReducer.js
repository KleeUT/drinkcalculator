import { actionTypes } from "../drinksForm/actionCreator";
export default (state = { drinks: 0 }, action) => {
  switch (action.type) {
    case actionTypes.updateVolume:
      return { ...state, volume: action.volume, drinks: action.drinks };
    case actionTypes.updatePercentage:
      return {
        ...state,
        percentage: action.percentage,
        drinks: action.drinks
      };
  }
  return state;
};
