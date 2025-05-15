import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { StyledHeader } from "./header.styled";
import imgLogo from "../../assets/img/logo-celestial.png"



export const Header = () => {

    return(
        <>
        <StyledHeader>
    
            <Link to="/"><img id="logo" src={imgLogo} alt="logo" /></Link>
        

            <Navbar></Navbar>
            
        </StyledHeader>
        
        </>
    )
}