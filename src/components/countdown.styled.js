import styled from "styled-components";

export const StyledCountdown = styled.div`
    padding: 2rem;
    background-color:rgb(131, 80, 249);
    border-radius: 0% 0% 50% 50%;
    width: 60%;
    margin: auto;

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;


        p{
            font-size: 4rem;
            text-align: center;
        }
    }
    
    .commands{
        margin: 0.5rem;
        position: relative;
       .command{
        margin: auto;
        padding: 0.2rem;
        border: 1px solid blue;
        border-radius: 10px;
        background: #6C9BCF;
        
    } 
    #play {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0%);
        font-size: 4rem;
    }
    #reset{
        position: absolute;
        left: 50%;
        transform: translate(75%, -10%);
        background-color:rgb(159, 184, 211);
        font-size: 3rem;

    }
    }
    

`