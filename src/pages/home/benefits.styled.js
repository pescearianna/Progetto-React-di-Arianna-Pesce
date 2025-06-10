import styled from 'styled-components';
import { device } from '../../styles/device';
import imgMeditation from "../../assets/img/meditazione-donna.png"

export const StyledBenefits = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 2rem 0;
   
    background-image: url(${imgMeditation});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom ;
   

    @media ${device.laptop} { 
        height: 60vh;
        div{
        width: 40%;
    }
    }

     @media ${device.mobile} {
        flex-direction: column;
         height: 130vh;
         background-position-y: center ;
        div{
        width: 100%;
    }
    }
    

    .post {
        height: 400px;
        width: 400px;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding: 2rem;

        h3{
            font-size: 2rem;
            padding-bottom: 1rem;
        }
        .bold{
            font-weight: bold;
        }
    }

    
`