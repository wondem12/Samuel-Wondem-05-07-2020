import React from "react";

import Wrapper from "../../../shared/components/UiElements/Wrapper/Wrapper";
import ListItem from "../ListItem/ListItem";


import "./List.scss";

const List = ({ ListTitle, data, sumUSD, sumILS }) => {
  return (
    <Wrapper title={ListTitle}>

      <div className="List__content">
        {data.length > 0 ? (
          <>
            {data.map(item => (
              <ListItem
                key={item.id}
                id={item.id}
                itemName={item.itemName}
                onlineStore={item.onlineStore}
                price={item.price}
                deliveryDate={item.deliveryDate}
                received={item.received}
              />
            ))}

            <div className="List__sum">{`Summery: ${sumUSD} $  / ${sumILS} ₪`}</div>
          </>
        ) : (
          "Please Add Items"
        )}
      </div>
    </Wrapper>
  );
};

export default List;
