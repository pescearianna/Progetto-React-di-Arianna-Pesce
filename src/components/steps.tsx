import imgStep1 from "../assets/img/step1.jpg";
import imgStep2 from "../assets/img/step2.jpg";
import imgStep3 from "../assets/img/step3.jpg";
import { StyledSteps } from "./steps.styled";

export const Steps = () => {
    return(
        <StyledSteps>
           
           <img src={imgStep1} alt="sit down" />
           <img src={imgStep2} alt="listen" />
            <img src={imgStep3} alt="connect and breathe" />
        </StyledSteps>
    )
}