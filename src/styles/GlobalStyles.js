import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap');

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;

    }

    body{
        background-color: bisque;
        font-family: "Open Sans", sans-serif;
        margin: 0;
        overflow-x: hidden;
    }

        ::-webkit-scrollbar {
        width: 5px; }

        ::-webkit-scrollbar-track {
        background: transparent; }

        ::-webkit-scrollbar-thumb {
        background: #fff300;
        border-radius: 10px; }

        ::-webkit-scrollbar-thumb:hover {
        background: #ffae17; }

    h1,h2,h3 {
        font-family: "Oswald", sans-serif;
    }
    
    
    `