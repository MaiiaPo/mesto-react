import { useState } from "react";

export function useForm(inputValues={}) {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const {value, name} = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = (newValues = {}) => {
    setValues(newValues);
  };

  return {values, handleChange, resetForm, setValues};
}
