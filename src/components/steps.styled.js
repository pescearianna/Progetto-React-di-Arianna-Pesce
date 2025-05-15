import styled from "styled-components"

export const StyledSteps = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%236BBBCF" fill-opacity="1" d="M0,128L30,160C60,192,120,256,180,272C240,288,300,256,360,234.7C420,213,480,203,540,208C600,213,660,235,720,245.3C780,256,840,256,900,240C960,224,1020,192,1080,154.7C1140,117,1200,75,1260,64C1320,53,1380,75,1410,85.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>');
    margin: 0 -5rem;
    background-repeat: no-repeat;
  background-size: cover;
   
    img {
        max-height: 15%;
        max-width: 15%;
        border-radius: 50%;
    }
`