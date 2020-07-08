import { useState } from "react";
import Joi from "joi-browser";

export const useForm = (initialInputs, schema) => {
  const [data, setData] = useState(initialInputs);
  const [errors, setErrors] = useState({});

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  
  const handleChange = ({ currentTarget: input }) => {
    const errorsObj = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errorsObj[input.name] = errorMessage;
    else delete errorsObj[input.name];

    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
    setErrors(errorsObj);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    return errors;
  };

  return [data, handleChange,handleSubmit, errors];
};
