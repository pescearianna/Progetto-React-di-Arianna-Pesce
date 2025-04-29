import { StyledFooter } from "./footer.styled";
import { Link } from "react-router-dom";


export const Footer = () => {
    return(
        <StyledFooter>
        <div className="Logo"> C E L E S T I A L </div>

        <div className="info_footer">
            <h3>SOCIAL</h3>
            <div className="socialbox">
            <Link to="https://www.instagram.com/arianna_psc/?hl=it" target="_blank"><p> Instagram </p></Link>
            <Link to="https://www.linkedin.com/in/ariannapesce" target="_blank"><p> LinkedIn </p></Link>
            <Link to="https://github.com/pescearianna" target="_blank"><p> Github </p></Link>
            </div>
        </div>

        <div className="politics">© Arianna Pesce</div>
        </StyledFooter>
    )
}