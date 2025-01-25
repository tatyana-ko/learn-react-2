import React from 'react';
import { Step, FormData, FormErrors } from '../../types';

interface Props {
  step: number;
  formData: FormData;
  updateFormData: (step: Step, field: string, value: string | number | boolean) => void;
  errors: FormErrors;
}

export const FormStep: React.FC<Props> = ({ step, updateFormData, formData, errors }) => {
  const { firstName, lastName, email } = formData.personal;
  const { company, position, experience } = formData.work;
  const { bio, subscribe } = formData.additional;

  let formContent;

  switch (step) {
    case 0:
      formContent = (
        <>
          <h2>Personal</h2>
          <label>First name:
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={firstName}
              onChange={(e) => updateFormData("personal", e.target.name, e.target.value)} />
            {errors.personal?.firstName && <span className="error">{errors.personal?.firstName}</span>}
          </label>
          <label>Last name:
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => updateFormData("personal", e.target.name, e.target.value)} />
            {errors.personal?.lastName && <span className="error">{errors.personal?.lastName}</span>}
          </label>
          <label>Email:
            <input
              type="text"
              name="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => updateFormData("personal", e.target.name, e.target.value)} />
            {errors.personal?.email && <span className="error">{errors.personal?.email}</span>}
          </label>
        </>
      )
      break;

    case 1:
      formContent = (
        <>
          <h2>Work</h2>
          <label>Company:
            <input 
              type="text" 
              placeholder="Company name"
              name="company"
              value={company}
              onChange={(e) => updateFormData("work", e.target.name, e.target.value)} />
            {errors.work?.company && <span className="error">{errors.work?.company}</span>}
          </label>
          <label>Position:
            <input 
              type="text" 
              placeholder="Position"
              name="position"
              value={position}
              onChange={(e) => updateFormData("work", e.target.name, e.target.value)} />
            {errors.work?.position && <span className="error">{errors.work?.position}</span>}
          </label>
          <label>Experience:
            <input 
              type="number" 
              min={1} 
              max={4}
              name="experience"
              value={experience}
              onChange={(e) => updateFormData("work", e.target.name, Number(e.target.value))} />
            {errors.work?.experience && <span className="error">{errors.work?.experience}</span>}
          </label>
        </>
      )
      break;

    case 2:
      formContent = (
        <>
          <h2>Additional</h2>
          <label>Bio:
            <input 
              type="text" 
              placeholder="Biography"
              name="bio"
              value={bio}
              onChange={(e) => updateFormData("additional", e.target.name, e.target.value)} />
            {errors.additional?.bio && <span className="error">{errors.additional?.bio}</span>}
          </label>
          <label>Would you like to subscribe?
            <input 
              type="checkbox"
              name="subscribe"
              checked={subscribe}
              onChange={(e) => updateFormData("additional", e.target.name, e.target.checked)} />
          </label>
        </>
      )
      break;

    default:
      break;
  };

  return <>
    <div className="form-group">
      {formContent}
    </div>
  </>;
};