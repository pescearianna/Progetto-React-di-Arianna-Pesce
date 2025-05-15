// import { DailyQuotes } from "../dailyquotes"
import { ButtonHero } from "../../components/button/buttonHero"
import { StyledHero } from "./hero.styled"
import medwoman from "../../assets/img/meditazione-donna.png"


export const Hero = () => {
    return(
        <StyledHero>
        <div>
            <div className="green-bg bm">
                <div className="black"><img src={medwoman} alt="donna che fa meditazione" /></div>
            </div>

        </div>

        <div className="hero-text">
            <div className="fifty"><p>Welcome</p>
            <p id="to">to</p>
            <h1><span>C </span><span>e </span><span>l </span><span>e </span><span>s </span><span>t </span><span>i </span><span>a </span><span>l</span></h1></div>
            
           <div className="green-bg sm"></div>
           <div className="fifty"><p id="claim">Breath slowly. Connect deep.</p>
           <div>

            <ButtonHero buttonText={"LOGIN"}></ButtonHero>
           </div></div>
           
        </div>
            {/* <DailyQuotes/>
            <p>quote</p> */}
{/* 
                <ButtonHero buttonText={"Know More"}></ButtonHero>
                <ButtonHero buttonText={"Log In"}></ButtonHero> */}
           

            
           
        
        </StyledHero>
    )
}