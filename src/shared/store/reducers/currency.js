import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currency: 0,
  error: false,
};

const setCurrency = (state, action) => {
  return {
    ...state,
    currency: action.currency.rates.ILS,
    error: false
  };
};

const fetchCurrencyFailed = (state, action) => {
  return {
    ...state,
    error: true
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENCY:
      return setCurrency(state, action);
    case actionTypes.FETCH_CURRENCY_FAILED:
      return fetchCurrencyFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
