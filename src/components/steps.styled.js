import styled from "styled-components";
import { device } from "../styles/device";

export const StyledSteps = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  top: 0;

  img {
    border: 2px double #01040b;
    max-height: 15%;
    max-width: 15%;
    border-radius: 50%;
  }

  @media ${device.mobile} {
    img {
      max-height: 25%;
      max-width: 25%;
    }
  }
`;
