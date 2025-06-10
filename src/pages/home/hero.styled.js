import styled from "styled-components";
import imgBgHeroD from "../../assets/img/hero-bg-desktop.jpg";
import { device } from "../../styles/device";




export const StyledHero = styled.div`
    height: 90vh;
    width: 100vw;
     margin: -3rem -10rem;
    display: flex;
        justify-content: center;
        align-items: flex-start;
        
    
    align-items: center;
    
    background: url(${imgBgHeroD});
    background-size: cover;
    background-position: bottom;

    


.hero-text{
    padding: -1rem;
    gap: 1rem;
        color: aliceblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        font-size: larger;
   
        
        h1 {
        text-shadow: 0px -5px 10px rgb(0, 0, 0), -5px 0px 10px rgb(0, 0, 0);
        
        text-transform: uppercase;
            
        }
        .cursive{
            font-family: "Pacifico", cursive;
            font-weight: 400;
            font-style: normal;
        }

 }

 @media ${device.laptop} {
        
        
        h1{
            font-size: 5rem;
        }
           
          
        
    }

  @media ${device.mobile} {
        height: 70vh;
        margin: -2rem;
        .hero-text{
            gap: 2rem;
        }
        h1{
            font-size: 2.5rem;
        }
           
          
        
    }

    


`