import React from "react";
import { useSelector } from "react-redux";

import GroupByItem from "../components/groupByItem/GroupByItem";
import "./GroupByStore.scss";

const GroupByStore = () => {
  const items = useSelector(state => {
    return state.items.items;
  });

  let groups = items.reduce((r, a) => {
    r[a.onlineStore] = [...(r[a.onlineStore] || []), a];
    return r;
  }, {});

  return (
    <div className="GroupByStore">
      {Object.keys(groups).map((group, i) => (
        <div className="GroupByStore__item" key={i}>
          <div className="GroupByStore__item--top">
            <span className="GroupByStore__item--top--title">{group}</span>
          </div>
          {groups[group].map(item => (
            <GroupByItem
              name={item.itemName}
              price={item.price}
              key={item.id}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GroupByStore;
