import styled from "styled-components";
import imgBgHeroD from "../../assets/img/hero-bg-desktop.webp";
import { device } from "../../styles/device";

export const StyledHero = styled.div`
  height: 90vh;
  width: 100vw;
  /* margin: -3rem -10rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${imgBgHeroD});
  background-size: cover;
  background-position: bottom;

  .hero-text {
    
    gap: 1rem;
    color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    font-size: larger;

    h1 {
      text-shadow: 0px -5px 10px rgb(0, 0, 0), -5px 0px 10px rgb(0, 0, 0);
      text-transform: uppercase;
    }
    #claim {
    }
    .cursive {
      font-family: "Pacifico", cursive;
      font-size: 1.5rem;
      font-weight: 400;
      font-style: italic;
      text-shadow: 0px -5px 10px rgb(0, 0, 0), -5px 0px 10px rgb(0, 0, 0),
        5px 0px 10px rgb(0, 0, 0), 0px 5px 10px rgb(0, 0, 0);
    }
    button {
      margin-top: 2rem;
    }
  }

  @media ${device.laptop} {
    h1 {
      font-size: 5rem;
    }
  }

  @media ${device.tablet} {
    /* margin: -3rem -5rem; */
   h1 {
      font-size: 5rem;
    }
  }

  @media ${device.tabletMini} {
    h1 {
          font-size: 3rem;
        }
    /* margin: -3rem -3rem; */
   
  }


  @media ${device.mobile} {
    height: 90vh;
    /* margin: -2rem; */
    .hero-text {
      gap: 2rem;
    }
    h1 {
      font-size: 2.5rem;
    }
  }
`;
