import styled from "styled-components";
import { device } from "../../styles/device";

export const MeditationSelectedStyled = styled.div`
  position: relative;
  border: 2px solid transparent;
  min-height: 60vh;

  .typewriter {
    color: whitesmoke;
    font-family: "Pacifico", cursive;
    font-weight: 400;
    font-style: italic;
    text-shadow: 0px -5px 10px rgb(0, 0, 0), -5px 0px 10px rgb(0, 0, 0),
      5px 0px 10px rgb(0, 0, 0), 0px 5px 10px rgb(0, 0, 0);
  }

  .choose {
    padding: 3rem 0;
  }

  .doing-med {
    
      
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    gap: 1rem;
    img {
      height: 7rem;
    }
    #instr {
      padding: 0.5rem 0;
    }
  }

  /* @media (min-width: 765px) {
    .choose {
     
      margin: 1rem 6rem;
      
    }
    .doing-med {
      background: rgba(224, 251, 255, 0.59);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(11.6px);
      -webkit-backdrop-filter: blur(11.6px);
      border: 1px solid rgba(224, 251, 255, 0.49);
      margin: 5rem 11rem 0;
      padding: 4rem;
    }
  } */

  @media ${device.tabletMini}{
    .doing-med {
      background: rgba(224, 251, 255, 0.59);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(11.6px);
      -webkit-backdrop-filter: blur(11.6px);
      border: 1px solid rgba(224, 251, 255, 0.49);
      margin: 5rem 5rem 0;
      padding: 2rem;
    }
  }

  @media ${device.mobile} {
    .doing-med {
      background: rgba(224, 251, 255, 0.59);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(11.6px);
      -webkit-backdrop-filter: blur(11.6px);
      border: 1px solid rgba(224, 251, 255, 0.49);
      margin: 5rem 9rem 0;
      padding: 1rem;
    }
  }

 @media (min-width: 765px) {
  background: rgba(224, 251, 255, 0.59);
      border-radius: 0 0 50px 50px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(11.6px);
      -webkit-backdrop-filter: blur(11.6px);
      border: 1px solid rgba(224, 251, 255, 0.49);
   
    min-height: 80vh;
    margin: 0 5rem 2rem;
    .doing-med{
      margin: 3rem 4rem;
    }
 }


  @media ${device.laptop} {
    
    padding: 2rem 2rem 4rem;
    margin: 0 8rem 4rem;
    border-radius: 0 0 50px 50px;
    .typewriter {
      font-size: 3rem;
    }
    .doing-med {
      width: 80%;
      min-height: 50vh;
 background: rgba(224, 251, 255, 0);
      border-left: 4px double ${({ theme }) => theme.colors.btn};
      border-right: 4px double ${({ theme }) => theme.colors.btn};
      border-radius: 50% 50% 10% 10%;
      margin: 0 auto;
      padding: 2rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      img {
        height: 7rem;
      }
      #instr {
        padding: 0.5rem 0;
      }
    }
  }

  h3 {
    padding-top: 2rem;
    font-size: 2rem;
    text-align: center;
  }

  .choose p,
  .choose i {
    padding: 0.5rem 0;
    text-align: center;
    width: 100%;
    z-index: 1;
    font-size: 3rem;
    font-weight: 600;
    color: #e0f2ff;
    text-shadow: -3px 3px #212931, 3px 0 #212931, 0 3px #212931, -3px 0 #212931,
      0 -3px #212931, 3px 3px #212931, 3px -3px #212931, -3px -3px #212931,
      -6px -6px 8px #212931;
  }
  .choose i {
    margin: 49%;
  }
`;
