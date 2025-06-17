import { createGlobalStyle } from "styled-components";
import { device } from "./device";
import imgBgHeroD from "../assets/img/hero-bg-desktop.webp";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=Pacifico&display=swap');

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;

    }

    body{
        background-color: #E0F2FF;
        font-family: "Open Sans", sans-serif;
        margin: 0;
        overflow-x: hidden;
    }

        ::-webkit-scrollbar {
        width: 5px; }

        ::-webkit-scrollbar-track {
        background: transparent; }

        ::-webkit-scrollbar-thumb {
        background:rgb(110, 128, 127);
        border-radius: 10px; }

        ::-webkit-scrollbar-thumb:hover {
        background:rgb(66, 62, 71); }

    h1,h2,h3 {
        font-family: "Oswald", sans-serif;
    }


    @media ${device.laptop}{
        main{
        margin: 3rem 10rem;
    }
    }

    @media ${device.tablet}{
        main{
        margin: 3rem 5rem;
    }
        

    }
    
    .bigtitle {
        position: relative;
        top: 0;
        left: -5%;
        z-index: -2;
        font-size: 7rem;
        font-weight: 600;
        color: #e0f2ff;
        text-shadow:-3px 3px #212931,3px 0 #212931,0 3px #212931,-3px 0 #212931,0 -3px #212931, 3px 3px #212931,3px -3px #212931, -3px -3px #212931, -6px -6px 8px #212931;
    }
    #upper{
        position: relative;
        bottom: 2rem;
        z-index: 0;
    }

     @media ${device.tabletMini}{
        main{
            margin: 3rem;
        }
        .bigtitle{
            font-size: 5rem;
        }
     }

    @media ${device.mobile}{
        main{
        margin: 2rem 2rem;

    }
        .bigtitle {
        position: relative;
        bottom: 0.8rem;
        left: -5%;
        font-size: 4rem;
        
    }
    #upper{
        bottom: 1rem;
    }
    }
            
    #back-sky{
    background-image: url(${imgBgHeroD});
    background-size: cover;
    background-position: bottom;
    margin: 0 -10rem;
}
    `;
