import styled from "styled-components";


export const MeditationMenuStyled =  styled.div`
    
    
    padding: 1rem;
    margin: 5rem;


   
    section{
        margin: 3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    border: 2px solid black;
        border-radius: 20px;
    background-color:rgb(236, 236, 236);
    img{
        max-width: 100px;
        max-height: 100px;
     }
    
    .info-wrap{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100px;
        
        padding: 0.5rem;
        
    }

    h3 {
        padding: 2rem 0.5rem 0 0;
    }
}

`