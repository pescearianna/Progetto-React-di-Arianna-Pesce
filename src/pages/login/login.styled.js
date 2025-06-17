import styled from "styled-components";
import { device } from "../../styles/device";

export const StyledLogin = styled.div`
  margin: 0 0 -5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .bigtitle {
    color: ${({ theme }) => theme.colors.bg};
    z-index: 1;
    top: 23px;
  }

  @media ${device.laptop} {
    padding: 4rem;

    #writer {
      padding: 2rem 4rem;
    }
  }

  @media ${device.mobile} {
    .section {
      padding: 2rem 1.5rem;
    }
  }

  i {
    width: 100%;
    font-size: 5rem;
    text-align: center;
  }

  .section {
    color: ${({ theme }) => theme.colors.menu};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;

    padding: 4rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  #writer {
    padding: 1.8rem 0;
  }

  button {
    border: 2px solid black;
  }
`;
