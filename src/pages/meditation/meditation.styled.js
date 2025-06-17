import styled from "styled-components";
import imgBgHeroD from "../../assets/img/hero-bg-desktop.webp";
import { device } from "../../styles/device";

export const StyledMeditation = styled.main`
  margin-top: 0;
  width: auto;

  @media ${device.laptop} {
    background: #000000;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 35%,
      rgba(224, 242, 255, 1) 100%
    );
    margin: 0 0 0;
    padding: 0 10rem;
    #back-sky {
      height: 100vh;
      background-image: url(${imgBgHeroD});
      background-size: cover;
      background-position: bottom;
      margin: 0 -10rem;
    }
  }

  @media ${device.tablet} {
    #back-sky{
      margin: 0 -5rem;
      height: 100vh;
    }
  }

  @media ${device.tabletMini} {
    .doing-med{
      margin: 5rem 5rem 0;
    }
  }

  @media ${device.mobile} {
    .doing-med{
      margin: 5rem 5rem 0;
    }
    #back-sky{
      
      height: 80vh;
    }
  }


  .item1 {
    background-color: pink;
  }

  .container {
    display: grid;
    column-gap: 2rem;
    grid-template-columns: auto auto auto;
  }

  .box {
    margin: 1rem;
    min-height: 80vh;
    border-radius: 50px;
  }
`;
