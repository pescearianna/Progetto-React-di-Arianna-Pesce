import styled from "styled-components";
import { device } from "../../styles/device";
import imgMeditation from "../../assets/img/meditazione-donna.webp";

export const StyledBenefits = styled.div`
  margin: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  background-image: url(${imgMeditation});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
   gap: 10rem;

  @media ${device.laptop} {
    height: 60vh;
    div {
      width: 40%;
    }
  }

  @media ${device.tabletMini} {
    flex-direction: column;
    gap:20rem;
    background-position-y: 20rem;
    margin: 1rem 1rem 2rem;
    div {
      width: 100%;
    }
  }

  .post {
    height: 400px;
    width: 400px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.2);

    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 1px solid rgba(224, 251, 255, 0.49);
   
  

    h3 {
      font-size: 2rem;
      padding-bottom: 1rem;
      text-align: center;
    }
    p {
      margin-left: 0.5rem;
    }
    .bold {
      font-weight: bold;
    }
  }
`;
