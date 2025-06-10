import styled from "styled-components";
import { device } from "../../styles/device";



export const StyledLogin = styled.div`
    
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;



    
    @media ${device.laptop} {
        padding: 4rem;
        
        #writer{
        padding: 2rem 4rem;
    }
    }

    @media ${device.mobile} {

    .section{

       padding: 2rem 1.5rem;
        
    } }

    i{
        width: 100%;
        
        font-size: 5rem;
        text-align: center;

    }

    .section{
        background-color: #F8F8F8;
        color: #212931;
        border-radius: 20px;
        
        padding: 4rem 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    } 

    
    #writer{
        padding: 1.8rem 0;
    }
  
    button {
        padding: 1rem;
        font-size: 1.4rem;
        border: 2px solid black;
        border-radius: 10px;
    }



`