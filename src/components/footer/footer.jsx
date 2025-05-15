import { StyledFooter } from "./footer.styled";
import { Link } from "react-router-dom";


export const Footer = () => {
    return(
        <StyledFooter>
        <div className="Logo"><h4> C E L E S T I A L </h4></div>


        <div className="middle">
            <div>
                <h4>DISCLAIMER</h4>
                <p>This is NOT a real web site, we are not selling any products or any services. This website want to be part of Arianna Pesce's personal portfolio, you can find more informations in my personal webpage: <a href="">Arianna Pesce | Personal Portfolio</a>.</p>
            </div>


            <div className="info_footer">
                <h4>FOLLOW ME</h4>
                <div className="socialbox">
                <Link to="https://www.instagram.com/arianna_psc/?hl=it" target="_blank"><p> Instagram </p></Link>
                <Link to="https://www.linkedin.com/in/ariannapesce" target="_blank"><p> LinkedIn </p></Link>
                <Link to="https://github.com/pescearianna" target="_blank"><p> Github </p></Link>
                </div>
            </div>
        </div>
        

        <div className="copyright">© Arianna Pesce</div>
        </StyledFooter>
    )
}