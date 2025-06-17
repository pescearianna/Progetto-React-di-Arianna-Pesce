import styled from "styled-components";
import { device } from "../styles/device";

export const ContactStyled = styled.main`
  .sec {
    background-color: #f8f8f8;
    color: #212931;
    border-radius: 20px;
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 3px 3px 3px #212931, -3px -3px 3px #212931;
  }

  form {
    width: 55%;
    .input-box {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 1rem 0;
    }
    .input-box label {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .input-box input,
    .input-box textarea {
      min-height: 2rem;
      min-width: 70%;
      padding: 0.3rem;
      font-size: 1rem;
    }
    .input-box textarea {
      min-height: 10rem;
    }
  }

  button {
    float: right;
    border: 2px solid black;
  }

  .info-wrap {
    width: 40%;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;

      i {
        font-size: 2rem;
      }
    }
  }

  @media ${device.tabletMini} {
    /* margin: 0 1rem;
    padding: 1rem; */
    .sec {
      flex-direction: column;
      padding: 1rem 1.3rem;
    }
    #upper {
      bottom: 1rem;
    }
    form {
      width: 100%;
      .input-box label {
        font-size: 1rem;
        font-weight: bold;
      }
    }
    .info-wrap {
      width: 100%;
      margin: 3rem 0 1rem;
    }
    #btn {
      font-size: 1.3rem;
    }
  }
`;
