import styled from "styled-components";
import { device } from "../../styles/device";

export const UserBoxStyled = styled.div`
  z-index: 6;
  width: 10%;
  position: fixed;
  top: 3.5rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  z-index: 600;

  #photoprofile {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  @media ${device.mobile} {
    #photoprofile {
      width: 75px;
      height: 75px;
    }
  }

  button {
    position: relative;
    top: -26px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: black;
    i {
      color: white;
    }
  }

  button {
    position: relative;
    display: inline-block;
  }

  /* Tooltip text */
  button .tooltiptext {
    visibility: hidden;
    width: 4rem;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    top: 100%;
    right: 105%;

    position: absolute;
    z-index: 1;
  }

  button:hover .tooltiptext {
    visibility: visible;
  }
`;
