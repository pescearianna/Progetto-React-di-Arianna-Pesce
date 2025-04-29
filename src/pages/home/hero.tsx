// import { DailyQuotes } from "../dailyquotes"
import { ButtonHero } from "../../components/button/buttonHero"
import { StyledHero } from "./hero.styled"


export const Hero = () => {
    return(
        <StyledHero>
        
           <h1>Welcome to Celestial</h1>
           <h2>Breath slowly. Connect deep.</h2>

            {/* <DailyQuotes/>
            <p>quote</p> */}

                <ButtonHero buttonText={"Know More"}></ButtonHero>
                <ButtonHero buttonText={"Log In"}></ButtonHero>
           

            
           
        
        </StyledHero>
    )
}