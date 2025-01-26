import React from 'react';
import { FieldState } from "../../types";
import { Field } from "../Form/Field";
import { useForm } from "../../hooks/useForm";

const initialValues = {
  userName: {
    name: "userName",
    label: "Name: ",
    type: "text",
    placeholder: "John",
  },
  email: {
    name: "email",
    label: "Email: ",
    type: "text",
    placeholder: "example@gmail.com",
  },
  password: {
    name: "password",
    label: "Password: ",
    type: "password",
  },
  confirmPassword: {
    name: "confirmPassword",
    label: "Confirm password: ",
    type: "password",
  },
};

export const SmartForm: React.FC = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    touchedMessage,
    reset,
  } = useForm({ initialValues, onSubmit: (data) => { console.log(data) } });

  const { userName, email, password, confirmPassword }: Record<string, FieldState> = values;

  const fieldsArray = [userName, email, password, confirmPassword];

  return <form>
    {fieldsArray.map((field, i) => (
      <Field 
        key={i} 
        name={field.name} 
        type={field.type} 
        label={field.label} 
        placeholder={field.placeholder}
        value={field.value} 
        onChange={handleChange}
        errors={errors}
        touched={touched}
        touchedMessage={touchedMessage}
      />
    ))}

    <button type="button" onClick={handleSubmit}>Submit</button>
    <button type="button" onClick={reset}>Reset</button>
  </form>
}