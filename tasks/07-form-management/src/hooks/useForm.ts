import { useState, useEffect } from "react";
import {
  FormConfig,
  FormErrors,
  FormMessages,
  FieldsState,
  FieldNames,
} from "../types";

export function useForm(config: FormConfig) {
  const formInputs = Object.entries(config.initialValues).reduce(
    (fields, currentValue) => {
      const [name, values] = currentValue;

      const field = {
        [name]: {
          ...values,
          value: "",
        },
      };

      return { ...fields, ...field };
    },
    {}
  );

  const [fields, setFields] = useState<FieldsState>(formInputs);
  const [errors, setErrors] = useState<FormErrors>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [touched, setTouched] = useState<FormMessages>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (fields.password.value === "" || fields.confirmPassword.value === "") {
      return;
    }

    fields.password.value === fields.confirmPassword.value
      ? setIsValid(true)
      : setIsValid(false);
  }, [fields.confirmPassword.value, fields.password.value]);

  const validation = (name: string, value: string) => {
    const emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const newErrors = { ...errors };

    switch (name) {
      case "userName":
        if (value.trim() === "") {
          newErrors.userName = "Name is required";
        } else if (value.length < 4) {
          newErrors.userName = "The name must be at least 4 characters long.";
        } else {
          newErrors.userName = "";
        }
        break;

      case "email":
        if (value.trim() === "") {
          newErrors.email = "Email is required";
        } else if (!emailRgx.test(value)) {
          newErrors.email = "Invalid email format.";
        } else {
          newErrors.email = "";
        }
        break;

      case "password":
        if (value.trim() === "") {
          newErrors.password = "Password is required";
        } else if (value.length < 6) {
          newErrors.password =
            "The password must be at least 6 characters long.";
        } else {
          newErrors.password = "";
        }
        break;

      case "confirmPassword":
        if (value.trim() === "") {
          newErrors.confirmPassword = "Repeat password";
        } else {
          newErrors.confirmPassword = "";
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  // неправильно работает валидация/подсказки. При потере фокуса сообщение пропадает и появляется
  // ошибка, но если снова поставить фокус, ошибка не пропадает и подсказка появляется рядом.

  const touchedMessage = (name: string, type: string) => {
    const messages = {
      userName:
        "This field is required and must be at least 4 characters long.",
      email: `This field is required and must be in the format "example@gmail.com".`,
      password: "Create a password that is at least 6 characters long.",
      confirmPassword: "Repeat your password.",
    };

    if (type === "focus") {
      setTouched((prevState) => ({
        ...prevState,
        [name]: messages[name as FieldNames],
      }));
    } else if (type === "blur" || type === "keydown") {
      setTouched((prevState) => ({ ...prevState, [name]: "" }));
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFields((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value.trim(),
      },
    }));

    validation(name, value);
  };

  const getUserData = () => {
    const values = Object.keys(fields).reduce((acc, fieldName) => {
      acc[fieldName as FieldNames] = fields[fieldName].value;

      return acc;
    }, {} as Record<FieldNames, string>);

    if (isValid) {
      config.onSubmit(values);
      reset();
      setIsValid(false);
    }
  };

  const reset = () => {
    const newState = { ...fields };
    const names = Object.keys(newState);

    names.map((name) => {
      newState[name] = {
        ...newState[name],
        value: "",
      };
    });

    setFields(newState);
    setIsValid(false);
  };

  return {
    values: fields,
    errors,
    touched,
    handleChange: handleInputChange,
    handleSubmit: getUserData,
    touchedMessage,
    reset,
  };
}
