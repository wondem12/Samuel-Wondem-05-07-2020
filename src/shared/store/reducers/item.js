import * as actionTypes from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newItem = {
        id: uuidv4(),
        itemName: action.itemData.itemName,
        onlineStore: action.itemData.onlineStore,
        price: action.itemData.price,
        deliveryDate: action.itemData.deliveryDate,
        received: action.itemData.received
      };
      return {
        ...state,
        items: state.items.concat(newItem)
      };
    case actionTypes.ITEM_RECEIVED:
      const newItems = [...state.items];
      const itemIndex = state.items.findIndex(item => item.id === action.id);

      newItems[itemIndex] = {
        ...newItems[itemIndex],
        received: !newItems[itemIndex].received
      };

      return {
        ...state,
        items: newItems
      };
    default:
      return state;
  }
};

export default reducer;
