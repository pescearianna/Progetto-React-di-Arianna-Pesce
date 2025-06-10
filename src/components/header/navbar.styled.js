import styled from "styled-components";
import { device } from "../../styles/device";

export const StyledNavbar = styled.nav`

      @media ${device.tabletMini} {
        position: relative;
          button{
            height: 2.4rem;
            width: 2.4rem;
            background-color: transparent;
            border: none;
            
            i{
              color: ${({theme}) => theme.colors.white};
              font-size: 2.2rem;
            }
          }

        
          .menu-link{
          position: fixed;
          top: 4rem;
          left: 0;
          width: 100vw;
          padding: 3rem;
          background-color: ${({theme}) => theme.colors.menu};
          color: ${({theme}) => theme.colors.white};
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          z-index: 300;
          overflow-x: hidden;
          }
        }
   
   
    a {
        padding: 0 1rem;
        font-size: 1.5rem;
        font-family: "Oswald", sans-serif;
        text-transform: uppercase;
        color: ${({theme}) => theme.colors.white};
        
        text-decoration: none;
        position: relative;
        z-index: 5;
        transition: color 0.3s;
        &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background-color:${({ theme }) => theme.colors.text};
            
            
            transition: width 0.3s, height 0.3s, left 0.3s, top 0.3s;
            z-index: -1;
            }

            &:hover {
            color:${({ theme }) => theme.colors.rose};
            
            }

            &:hover::after {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            border-radius: 30px;
            }
       
    }



`