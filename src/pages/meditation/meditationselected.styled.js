import styled from "styled-components";

export const MeditationSelectedStyled = styled.div`

position: relative;
    margin: 0rem 2rem 4rem;
    
    border: 2px solid transparent;
    min-height: 80vh;
    border-radius: 0 0 50px 50px;
    background-color:  #E0F2FF;



 

    .choose{
        
        padding: 3rem 0;
    }



        /* .shadow {
        
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
rgb(138, 0, 251), 
            #0000ff, 
        
 
         
      rgb(138, 0, 251),  
            #0000ff
 

    
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
            } */


            h3{
                padding-top: 2rem;
                font-size: 2rem;
                text-align: center;
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
    
    border-left: 4px double;
    border-right: 4px double;
    border-radius: 50% 50% 10% 10%;
        margin: 0 auto;
        padding: 2rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    img{
        height: 7rem;
    }
    #instr{
        padding: 0.5rem 0;
    }
}





`