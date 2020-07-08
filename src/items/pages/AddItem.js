import React from "react";
import { useDispatch } from "react-redux";
import Joi from "joi-browser";

import * as actions from "../../shared/store/actions/index";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input/Input";
import Button from "../../shared/components/FormElements/Button/Button";

import "./AddItem.scss";

const AddItem = ({ closeModal }) => {

  const dispatch = useDispatch();
  
  const onItemAdded = itemData => dispatch(actions.addItem(itemData));

  const schema = {
    itemName: Joi.string().required(),
    onlineStore: Joi.string().required(),
    price: Joi.number()
      .required()
      .min(1),
    deliveryDate: Joi.date().required(),
    received: Joi.bool()
  };

  const [data, handleChange, handleSubmit, errors] = useForm(
    {
      itemName: "",
      onlineStore: "",
      price: 0,
      deliveryDate: "",
      received: false
    },
    schema
  );

  const submitHandler = e => {
    const valid = handleSubmit(e);
    if (valid) return;
    onItemAdded(data);
    closeModal();
  };

  return (
    <div className="FormWarrper">
      <div className="Form">
        <form onSubmit={submitHandler}>
          <Input
            type={"text"}
            name={"itemName"}
            value={data["itemName"]}
            label={"Item Name"}
            onChange={handleChange}
            error={errors ? errors["itemName"] : undefined}
          />
          <Input
            type={"text"}
            name={"onlineStore"}
            value={data["onlineStore"]}
            label={"Online Store"}
            onChange={handleChange}
            error={errors ? errors["onlineStore"] : undefined}
          />
          <Input
            type={"text"}
            name={"price"}
            value={data["price"]}
            label={"Item Price (USD Only)"}
            onChange={handleChange}
            error={errors ? errors["price"] : undefined}
          />
          <Input
            type={"date"}
            name={"deliveryDate"}
            value={data["deliveryDate"]}
            label={"Delivery Date"}
            onChange={handleChange}
            error={errors ? errors["deliveryDate"] : undefined}
          />

          <Button btnText="Submit" btnClass="btn-bg" btnType="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
