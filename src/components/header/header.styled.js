import styled from "styled-components";
import { device } from "../../styles/device";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.menu};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.4rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 500;

  #logo {
    height: 10vh;
    border-radius: 5%;
  }

  @media ${device.tablet} {
    padding: 0.2rem 2.5rem;
    #logo {
      height: 6vh;
      padding: 0.2rem 0;
    }
  }

  @media ${device.mobile} {
    padding: 0.2rem 2.5rem;
    #logo {
      height: 7vh;
      padding: 0.2rem 0;
    }
  }
`;
