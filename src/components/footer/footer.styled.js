import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100vw;
    background-color: #212931;
    color: #F8F8F8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5rem 5rem;

    h4 {
        padding: 1rem 0;
    }
    
    .middle{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap:3rem;
       
        div{
            min-width: 35%;
        }

        .socialbox{
                display: flex;
                flex-direction: column;
                justify-content: center;

                a {
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    align-items: center;
                    padding: 0.5rem 0;
                    i {
                        padding: 0 1rem;
                        font-size: 1.5rem;
                    }
                }
            }


    }

    

    .copyright{
        width: 100%;
        text-align: center;
        padding: 0.2rem 0;
        font-size: smaller;
    }
`