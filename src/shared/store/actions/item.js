import * as actionTypes from './actionTypes';


export const addItem = ( itemData ) => {
    return {
        type: actionTypes.ADD_ITEM,
        itemData: itemData
    };
};

export const ItemReceived = ( id ) => {
    return {
        type: actionTypes.ITEM_RECEIVED,
        id:id
    };
};