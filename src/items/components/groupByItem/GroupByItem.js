import React from "react";

import "./GroupByItem.scss";

const GroupByItem = ({ name, price }) => {
  return (
    <div className="groupByItem">
      <div className="groupByItem__name">{name}</div>
      <div className="groupByItem__price">{price} $</div>
    </div>
  );
};

export default GroupByItem;
