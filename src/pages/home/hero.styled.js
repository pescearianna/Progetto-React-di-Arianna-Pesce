import styled from "styled-components";
import imgBgHero from "../../assets/img/bg-home.jpg"

export const StyledHero = styled.div`
    height: 110vh;
    background-image: url(${imgBgHero});
    background-repeat: no-repeat;
  background-size: cover;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
    h1{
        padding: 2rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        text-transform: uppercase;
        font-size: 3rem;
    }

    h2 {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        font-size: 2rem;
    }
`