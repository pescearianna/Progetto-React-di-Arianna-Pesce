import imgStep1 from "../../assets/img/step1.webp";
import imgStep2 from "../../assets/img/step2.webp";
import imgStep3 from "../../assets/img/step3.webp";
import { StyledSteps } from "./steps.styled";

export const Steps = () => {
  return (
    <StyledSteps>
      <img src={imgStep1} alt="sit down" />
      <img src={imgStep2} alt="listen" />
      <img src={imgStep3} alt="connect and breathe" />
    </StyledSteps>
  );
};
