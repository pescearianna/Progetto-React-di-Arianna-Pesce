import styled from "styled-components";
import { device } from "../styles/device";
import arrow from "../assets/img/arrow.jpg";


export const StyledAbout = styled.main`
    background-image: url("../assets/img/wwwatercolor.jpg");
    margin: 3rem 10rem; 


    .photodet {
        width: 50%;
        height: auto;
        border-radius: 20px;
        display: block;
        margin-top: auto;
        margin-bottom: auto;
    }
    
    .espacio{
        margin: 3rem 0;
    }

    

    .section {
        background-color: #F8F8F8;
        color: #212931;
        border-radius: 20px;
        padding: 2rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3rem;
        box-shadow: 3px 3px 3px #212931, -3px -3px 3px #212931;
        

        img {
            max-height: 50vh;
        }
        

    }
    
    h2 {
            padding: 0.5rem 0 1rem;
        }

    .celes {
        background-color: ${({theme}) => theme.colors.cel};
    }


    #behindtheproject {
     
        padding: 2rem 3rem;
        background-color: white;
        border-radius: 20px;
        box-shadow: 3px 3px 3px #212931, -3px -3px 3px #212931;
        
    }


    #photoindia{
        
        margin: 2rem 0.5rem;
        
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
        img{
            
            max-width: 32%;
            border-radius: 10px;
        }
       
    }

   #joinit {
        text-align: center;
        font-size: larger;
        #joinbtn{
            height: 60vh;
           background-image: url(${arrow});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
                display: flex;
                justify-content: center;
                align-items: center;
            
        }
   }



    
    
    @media ${device.tablet} {
       margin: 2rem 2rem; 
    }

    @media ${device.tabletMini} {
        margin: 0 1rem;
        padding: 1rem;
        .section{
            margin:0;
            flex-direction: column-reverse;
            .photodet{
                width: 100%;
                height: auto;
            }
        }
        .none{
            display: none;
        }
        
        #behindtheproject{
            margin-top: 2rem;
        }
        #photoindia img {
            width: 45%;
        }
        
        }

`