import styled from "styled-components";

export const StyledHeader = styled.header`

background-color: rgba(5, 148, 161, 0.28); /* un poco translúcido */
backdrop-filter: blur(5px);
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    z-index: 1;

    img {
        max-width: 80px;
        max-height: 80px;
        border-radius: 5%;
    }
`