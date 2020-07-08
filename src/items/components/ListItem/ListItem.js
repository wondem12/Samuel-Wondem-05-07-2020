import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../shared/store/actions/index";

import Button from "../../../shared/components/FormElements/Button/Button";
import "./ListItem.scss";

const ListItem = ({
  id,
  itemName,
  onlineStore,
  price,
  deliveryDate,
  received
}) => {
  const dispatch = useDispatch();
  const onItemRemove = itemId => dispatch(actions.ItemReceived(itemId));
  const currency = useSelector(state => {
    return state.currency.currency;
  });

  return (
    <div className="List__content__ListItem">
      <div className="List__content__ListItem--name">{itemName}</div>
      <div className="List__content__ListItem--onlineStore">{onlineStore}</div>
      <div className="List__content__ListItem--deliveryDate">
        {deliveryDate}
      </div>

      {!received && (
        <Button
          btnText="Received &#10003;"
          btnClass="btn-inline"
          Clicked={() => onItemRemove(id)}
        />
      )}
      <div className="List__content__ListItem--price">
        {price} &#36; / {(price * currency).toFixed(2)} &#8362;
      </div>
    </div>
  );
};

export default ListItem;
