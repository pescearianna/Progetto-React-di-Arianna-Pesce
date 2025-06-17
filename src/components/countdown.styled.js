import styled from "styled-components";
import { device } from "../styles/device";

export const StyledCountdown = styled.div`
  padding: 2rem;
  border-bottom: 6px solid ${({ theme }) => theme.colors.btn};
  border-radius: 0% 0% 50% 50%;

  margin: auto;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    p {
      font-size: 4rem;
      text-align: center;
    }
  }

  @media ${device.laptop} {
    width: 60%;
    .content {
      p {
        padding-bottom: 1rem;
        font-size: 3rem;
        color: whitesmoke;
        text-shadow: 0px -5px 10px rgb(0, 0, 0), -5px 0px 10px rgb(0, 0, 0),
          5px 0px 10px rgb(0, 0, 0), 0px 5px 10px rgb(0, 0, 0);
      }
    }
  }

  @media ${device.tablet} {
    .content {
      p {
        padding-bottom: 1rem;
        font-size: 3.5rem;
        color: whitesmoke;
        text-shadow: 0px -5px 10px rgb(0, 0, 0), -5px 0px 10px rgb(0, 0, 0),
          5px 0px 10px rgb(0, 0, 0), 0px 5px 10px rgb(0, 0, 0);
      }
    }
  }

  @media ${device.mobile} {
    .content {
     p {
        padding-bottom: 1rem;
        font-size: 2rem;
        color: whitesmoke;
        text-shadow: 0px -5px 10px rgb(0, 0, 0), -5px 0px 10px rgb(0, 0, 0),
          5px 0px 10px rgb(0, 0, 0), 0px 5px 10px rgb(0, 0, 0);
      }
    }
    .commands{
      font-size: 1rem;
    }
  }

  .commands {
    margin: 0.5rem;
    position: relative;
    .command {
      margin: auto;
      padding: 0.4rem 0.6rem;
      border: 2px solid ${({ theme }) => theme.colors.btn};
      color: white;

      border-radius: 50%;
      background: ${({ theme }) => theme.colors.btn};
      &:hover {
        background-color: ${({ theme }) => theme.colors.menu};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  #volumeup {
    position: absolute;
    left: 50%;
    transform: translate(-175%, -10%);
    background-color: rgb(159, 184, 211);
    font-size: 3rem;
  }
  #play {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    font-size: 4rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.menu};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  #reset {
    position: absolute;
    left: 50%;
    transform: translate(75%, -10%);
    background-color: rgb(159, 184, 211);
    font-size: 3rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.menu};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  button .tooltiptext {
    visibility: hidden;
    width: 8rem;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    top: 50%;
    right: -10%;
    font-size: 1rem;

    position: absolute;
    z-index: 1;
  }

  button:hover .tooltiptext {
    visibility: visible;
  }
`;
