import React, { useState } from 'react';
import type { FormData, FormErrors, Step } from '../types';
import { isStepValid, validateStep } from '../utils/validation';
import { ProgressBar } from './ProgressBar';
import { FormStep } from './Form/FormStep';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    personal: {
      firstName: '',
      lastName: '',
      email: ''
    },
    work: {
      company: '',
      position: '',
      experience: 0
    },
    additional: {
      bio: '',
      subscribe: false
    }
  });
  const [currentStep, setCurrentStep] = useState<Step>('personal');
  const [errors, setErrors] = useState<FormErrors>({});

  const updateFormData = (step: Step, field: string, value: string | number | boolean) => {
    const newState = { ...formData };

    newState[step] = {
      ...newState[step],
      [field]: value,
    };

    // ошибка ts 
    // (newState[step] as any) = {
    //   ...newState[step],
    //   [field]: value,
    // };

    setFormData(newState);
    validateStep(step, field, value, errors, setErrors);
  };

  const handleStepChange = (direction: 'next' | 'prev') => {
    switch (direction) {
      case "next":
        if (!isStepValid(errors, currentStep)) {
          return;
        };

        if (currentStep === "personal") {
          setCurrentStep("work");
        } else {
          setCurrentStep("additional");
        };
        break;

      case "prev":
        if (currentStep === "additional") {
          setCurrentStep("work");
        } else {
          setCurrentStep("personal");
        };
        break;

      default:
        break;
    };
  };

  const handleSubmit = async () => { 
    //console.log();
  };

  return (
    <div className="registration-form">
      <ProgressBar currentStep={currentStep} />

      <form className="registration-form" onSubmit={handleSubmit}>
        {currentStep === 'personal' && <FormStep step={0} formData={formData} updateFormData={updateFormData} errors={errors} />}
        {currentStep === 'work' && <FormStep step={1} formData={formData} updateFormData={updateFormData} errors={errors} />}
        {currentStep === 'additional' && <FormStep step={2} formData={formData} updateFormData={updateFormData} errors={errors} />}

        <div className="form-navigation">
          {currentStep !== "personal" && <button type="button" name="prev" onClick={(e) => handleStepChange((e.currentTarget.name as "prev" | "next"))}>Prev</button>}
          {currentStep !== "additional" && <button type="button" name="next" onClick={(e) => handleStepChange((e.currentTarget.name as "prev" | "next"))}>Next</button>}
          {currentStep === "additional" && <button type="submit" disabled={!isStepValid(errors, currentStep)} name="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};