import styled from "styled-components";
import imgBgHero from "../../assets/img/bg-home.jpg";
import { device } from "../../styles/device";


export const StyledHero = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    
    align-items: center;
    
    .green-bg{
        background-color:${({ theme }) => theme.colors.primary};
        
    }
    

    .bm{
        height: 70vh;
        width: 50vw;
    border-radius: 0 50% 50% 0;
    
    }

    .sm {
        height: 1rem;
        width: 200%;
        margin: 0 -2rem;
    }

    
        
        img{
            max-height: 600px;
        max-width: 600px;
        
        margin: -5rem 0 0 8rem;
        }
    

    .fifty{
        min-height: 10rem;
    }

    .hero-text{
        margin-right: 8rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        width: inherit;
        h1 {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        font-size: 5rem;
        margin: 0.5rem 0 0.5rem 1rem;
        text-transform: uppercase;
            
        }
        p{
            font-size: 2rem;
            margin: 0.5rem 0 0 -1rem;
        }
        #to {
            margin: 0.5rem 0 0 0.50rem;
        }
        #claim{
            margin: 0.5rem 0 0 0.50rem;
        }

 }
       

        @media ${device.mobile} {
            
        }



   

    

    


`