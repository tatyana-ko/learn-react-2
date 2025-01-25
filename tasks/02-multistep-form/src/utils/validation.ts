import { SetStateAction } from "react";
import type { FormErrors, Step } from "../types";

export const isStepValid = (errors: FormErrors, step: Step): boolean => {
  const stepErrors = errors[step];

  if(!stepErrors) {
    return false;
  };

  const errorsObject = Object.values(stepErrors);
  
    if(step === "personal" || step === "work") {
      return (errorsObject.length === 3 && errorsObject.every(e => e === ""));
    };

    if(step === "additional") {
      return (errorsObject.length === 1 && errorsObject.every(e => e === ""));
      //неправильно работает, если сначала выбрать checked у subscribe
    };

  return false;
};

export const validateStep = (
  step: Step,
  field: string,
  value: string | number | boolean,
  errors: FormErrors,
  setErrors: {
    (value: SetStateAction<FormErrors>): void;
    (arg0: FormErrors): void;
  }
) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let newErrors: FormErrors = { ...errors };

  switch (step) {
    case "personal":
      if (
        (field === "firstName" || field === "lastName" || field === "email") &&
        !(value as string).trim()
      ) {
        newErrors[step] = {
          ...newErrors[step],
          [field]: "Required field",
        };
      } else if (
        (field === "firstName" || field === "lastName") &&
        (value as string).length < 3
      ) {
        newErrors[step] = {
          ...newErrors[step],
          [field]: "The name must be at least 3 characters long.",
        };
      } else if (field === "email" && !emailRegex.test(value as string)) {
        newErrors[step] = {
          ...newErrors[step],
          [field]: "Invalid email format.",
        };
      } else {
        newErrors[step] = {
          ...newErrors[step],
          [field]: "",
        };
      }
      break;

    case "work":
      if (
        (field === "company" || field === "position") &&
        !(value as string).trim()
      ) {
        newErrors[step] = {
          ...newErrors[step],
          [field]: "Required field",
        };
      } else if (field === "experience" && (value as number) > 4) {
        newErrors[step] = {
          ...newErrors[step],
          [field]: "From 1 to 4",
        };
      } else {
        newErrors[step] = {
          ...newErrors[step],
          [field]: "",
        };
      }
      break;

    case "additional":
      if (field === "bio" && !(value as string).trim()) {
        newErrors[step] = {
          ...newErrors[step],
          bio: "Required field",
        };
      } else {
        newErrors[step] = {
          ...newErrors[step],
          bio: "",
        };
      }
      break;

    default:
      break;
  }

  setErrors(newErrors);
};
