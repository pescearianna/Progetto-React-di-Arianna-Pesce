import styled from "styled-components";

export const StyledNavbar = styled.nav`
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    position: relative; 
    overflow: visible;
    
  
    a {
        padding: 0 1rem;
        font-size: 1.5rem;
        font-family: "Oswald", sans-serif;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.text};
        font-weight: 600;
        text-decoration: none;
        position: relative;
        z-index: 1;
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

    .user-box{
        border: 3px solid red;
        border-radius: 50px;
    }

    /* Media query para tablets */
  /* @media (max-width: 768px) {
    a {
      font-size: 1.2rem;
      padding: 0 0.7rem;
    }
  }

  /* Media query para móviles */
  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;

    a {
      font-size: 1rem;
      padding: 0.5rem 0;
      display: block;
    }

    .user-box {
      margin-top: 1rem;
    }
  } */


`