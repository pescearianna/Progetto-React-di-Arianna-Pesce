import imgStep1 from "../../assets/img/step1.jpg";
import imgStep2 from "../../assets/img/step2.jpg";
import imgStep3 from "../../assets/img/step3.jpg";
import { StyledSteps } from "./steps.styled";

export const Steps = () => {
    return(
        <StyledSteps>
            <div><img src={imgStep1} alt="sit down" /><p>Sit down</p></div>
            <div><img src={imgStep2} alt="listen" /><p>Listen</p></div>
            <div><img src={imgStep3} alt="connect and breathe" /><p>Breathe</p></div>
        </StyledSteps>
    )
}