import styled from "styled-components";
import { device } from "../../styles/device";

export const MeditationMenuStyled = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.5rem;
  margin: 3rem 10rem;

  @media ${device.tabletMini} {
    display: block;
    margin: 2rem 1rem;
    section {
      margin: 1rem 0;

      .info-wrap {
        padding: 1rem 1.5rem;
      }
    }
  }

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 3px 3px 10px ${({ theme }) => theme.colors.obsc},
      -3px -3px 10px ${({ theme }) => theme.colors.obsc};

    img {
      max-height: 6rem;
    }

    .info-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 100px;

      padding: 2rem 2.5rem;
      h3 {
        margin: 1rem 0;
      }

      #timer {
        margin: 1rem 0;
        font-size: large;
      }

      .meditationbutton {
        align-items: center;
        appearance: none;
        background-image: radial-gradient(
          100% 100% at 100% 0,
          rgb(53, 207, 250) 0,
          #5468ff 100%
        );
        border: 0;
        border-radius: 20px;
        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
          rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
          rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-flex;
        font-family: "JetBrains Mono", monospace;
        height: 48px;
        justify-content: center;
        line-height: 1;
        list-style: none;
        overflow: hidden;
        padding-left: 16px;
        padding-right: 16px;
        position: relative;
        text-align: left;
        text-decoration: none;
        transition: box-shadow 0.15s, transform 0.15s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow, transform;
        font-size: 18px;

        &:focus {
          box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
        }

        &:hover {
          box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
          transform: translateY(-2px);
        }

        &:active {
          box-shadow: #3c4fe0 0 3px 7px inset;
          transform: translateY(2px);
        }
      }
    }
  }

  .personal-time-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    font-size: large;
    .setting-time {
      display: flex;
      flex-direction: column;
      padding: 0 0.4rem;
      button {
        padding: 0.2rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
      }
    }
  }
`;
