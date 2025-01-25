import React from 'react';
import type { Step } from '../types';

interface Props {
  currentStep: Step;
}

export const ProgressBar: React.FC<Props> = ({ currentStep }) => {
  const steps: Step[] = ['personal', 'work', 'additional'];

  return (
    <div className="progress-bar">
      {steps.map((step, i) => {
        let additionalClass = "";

        if (i < steps.indexOf(currentStep)) {
          additionalClass = "completed"
        } else if (step === currentStep) {
          additionalClass = "active"
        };

        return (<div key={i} className={`step ${additionalClass}`}>
          {i + 1}
        </div>)
      })}
    </div>
  );
};