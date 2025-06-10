import styled from "styled-components";
import { device } from "../../styles/device";


export const StyledFooter = styled.footer`
    width: 100vw;
    background-color: ${({theme}) => theme.colors.menu};
    color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5rem 5rem;
    
    
    @media ${device.mobile} {
        padding: 0.5rem 1rem;
        .middle{
            flex-direction:column;
            gap: 0;
        }
}

    h4 {
        padding: 1rem 0;
    }

    a{
        color: ${({theme}) => theme.colors.white};
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