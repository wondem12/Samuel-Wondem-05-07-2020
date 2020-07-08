import * as actionTypes from './actionTypes';
import axios from "axios"



export const setCurrency = ( currency ) => {
    return {
        type: actionTypes.SET_CURRENCY,
        currency: currency
    };
};

export const fetchCurrencyFailed = () => {
    return {
        type: actionTypes.FETCH_CURRENCY_FAILED
    };
};

export const initCurrency = () => {
    return dispatch => {
        axios.get( 'https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS' )
            .then( response => {
               dispatch(setCurrency(response.data));
            } )
            .catch( error => {
                dispatch(fetchCurrencyFailed());
            } );
    };
};