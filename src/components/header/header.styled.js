import styled from "styled-components";

export const StyledHeader = styled.header`
    
    background-color:#212931;
    color: #F8F8F8;
    backdrop-filter: blur(5px);
    padding: 0 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 1;

    #logo {
        height:10vh;
        border-radius: 5%;
    }
`