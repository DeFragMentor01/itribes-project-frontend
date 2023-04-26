import { useState } from "react";
import { useRecoilState } from "recoil";
import { stepState } from "../atoms"; 
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo";
import RegisterStepThree from "./RegisterStepThree";

interface RegisterFormProps {
  darkMode: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ darkMode }) => {
  const [step, setStep] = useRecoilState(stepState);

  const handleSubmitStepOne = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // validate form data
    setStep(2);
  };

  const handleSubmitStepTwo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // validate form data
    setStep(3);
  };

  return (
    <div>
      {step === 1 && (
        <RegisterStepOne onSubmit={handleSubmitStepOne} darkMode={darkMode} />
      )}
      {/* {step === 2 && (
        <RegisterStepTwo onSubmit={handleSubmitStepTwo} darkMode={darkMode} />
      )}
      {step === 3 && <RegisterStepThree darkMode={darkMode} />} */}
      {/* render pagination based on the current step */}
    </div>
  );
};

export default RegisterForm;
