import styled from "styled-components";

export const StyledCountdown = styled.div`
    padding: 2rem;
    border-bottom: 6px solid rgb(131, 80, 249);
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
        padding: 0.4rem 0.6rem;
        border: 2px solid rgb(131, 80, 249);
        color: white;
        
        border-radius: 10px;
        background:rgb(131, 80, 249);
        
    } 

    
    }
    
    #volumeup{
       position: absolute;
        left: 50%;
        transform: translate(-175%, -10%);
        background-color:rgb(159, 184, 211);
        font-size: 3rem;
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

    

`