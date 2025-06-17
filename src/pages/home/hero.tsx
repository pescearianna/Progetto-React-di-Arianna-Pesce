import { useNavigate } from "react-router-dom";
import { ButtonHero } from "../../components/button/buttonHero"
import { StyledHero } from "./hero.styled"


export const Hero = () => {

const navigate = useNavigate();

const goToMed = () => {
    navigate("/meditation");
  };

    return(
        <StyledHero>
        <div className="hero-text">
            <h1><span>c </span><span>e </span><span>l </span><span>e </span><span>s </span><span>t </span><span>i </span><span>a </span><span>l</span></h1>
           <div id="claim"><p  className="cursive">Breath slowly. Connect deep.</p></div>
           <div>
        <ButtonHero text={"LOG IN"} onClick={goToMed} aria-label="Log In"></ButtonHero></div>
        </div>
        </StyledHero>
    )
}