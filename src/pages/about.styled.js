import styled from "styled-components";
import { device } from "../styles/device";


export const StyledAbout = styled.main`
    background-image: url("../assets/img/wwwatercolor.jpg");
    margin: 3rem 10rem; 
    h1 {
        text-align: center;
        margin: 1rem 0;
    }

    .photodet {
        width: 50%;
        height: auto;
        border-radius: 20px;
        display: block;
        margin-top: auto;
        margin-bottom: auto;
    }

    .section {
        background-color: #F8F8F8;
        color: #212931;
        border-radius: 20px;
        padding: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3rem;
        div {
            margin-top: 2rem;
        }

    }

    .celes {
        background-color: ${({theme}) => theme.colors.cel};
    }

    #photoindia{
        margin: 2rem 0.5rem;
        
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
        img{
            width: 32%;
            border-radius: 10px;
        }
    }

   #joinit {
        text-align: center;
   }



    
    
    @media ${device.tablet} {
       margin: 2rem 2rem; 
    }

    @media ${device.mobile} {
        margin: 0 1rem;
        padding: 1rem;
        .section{
            margin:0;
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