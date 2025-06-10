// import { DailyQuotes } from "../dailyquotes"
import { useNavigate } from "react-router-dom";
import { ButtonHero } from "../../components/button/buttonHero"
import { StyledHero } from "./hero.styled"



export const Hero = () => {

const navigate = useNavigate();

const goToMed = () => {
     console.log("Navigazione in corso...");
    navigate("/meditation"); // cambia con la rotta desiderata
  };

    return(
        <StyledHero>
        

        <div className="hero-text">
     
            <h1><span>c </span><span>e </span><span>l </span><span>e </span><span>s </span><span>t </span><span>i </span><span>a </span><span>l</span></h1>

           
           <p id="claim" className="cursive">Breath slowly. Connect deep.</p>

           <div>

            <ButtonHero text={"LOG IN"} onClick={goToMed}></ButtonHero></div>
           
           
        </div>
            
           
       
            
           
        
        </StyledHero>
    )
}