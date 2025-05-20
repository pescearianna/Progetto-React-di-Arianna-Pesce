import styled from "styled-components";

export const MeditationSelectedStyled = styled.div`

position: relative;
    margin: 0rem 2rem 4rem;
    
    border: 2px solid transparent;
    min-height: 80vh;
    border-radius: 0 0 50px 50px;
    background-color: whitesmoke;


 

    .choose{
        
        padding: 3rem 0;
    }



        .shadow {
        
        &::before, &::after {
            content:'';
            position: absolute;
            top:-2px;
            left:-2px;
            border-radius: 0 0 50px 50px;
            width: calc(99% + 6px);
            height: calc(99% + 6px);
            background: linear-gradient(
            45deg, 
            #fb0094, 
            #0000ff, 
            #00ff00, 
            #ffff00, 
            #ff0000, 
            #fb0094, 
            #0000ff, 
            #00ff00, 
            #ffff00, 
            #ff0000
            );
            background-size: 400%;
            z-index:-1;
            animation: shadow 20s linear infinite;
        }
        
        &::after {
            top:-8px;
            left:-8px;
            width:calc(100% + 16px);
            height:calc(100% + 16px);    
            filter:blur(24px);
            opacity:0.9;
        }
  


            @keyframes shadow {
            0% {
                background-position: 0 0;
            }
            50% {
                background-position: 200% 0;
            }
            100% {
                background-position: 0 0;
            }
            }



        .choose p,.choose i{
                padding: 0.5rem 0;
                text-align: center;
                width: 100%;
                z-index: 1;
        font-size: 3rem;
        font-weight: 600;
        color: #e0f2ff;
        text-shadow:-3px 3px #212931,3px 0 #212931,0 3px #212931,-3px 0 #212931,0 -3px #212931, 3px 3px #212931,3px -3px #212931, -3px -3px #212931, -6px -6px 8px #212931;

            }  
            .choose i{
                margin: 49%;
                
            }
        
    }
    



.doing-med{
    width: 60%;
    min-height: 50vh;
    background-color: #6C9BCF;
        margin: 0 auto;
        padding: 2rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 0.5rem;
    img{
        height: 7rem;
    }
    #instr{
        padding: 0.5rem 0;
    }
}

.profileuser{
    height: 50px;
    width: 50px;
    border: 2px solid red;
    position: sticky;
    top:3rem;
    right: 3rem;
    z-index: 3;
}




`