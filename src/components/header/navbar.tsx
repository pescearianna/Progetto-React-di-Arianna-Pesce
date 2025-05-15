import { Link } from "react-router-dom";

import { StyledNavbar } from "./navbar.styled";
import { UserBox } from "../../pages/login/userbox";



export const Navbar = () => {



    return (
        <StyledNavbar>
              
        <Link to="/">Home</Link>
            {/* { !user ? (
                <Link to="/login">Login</Link>
            ) : (
                <Link to="/createpost">Post</Link>  
            )} */}

            <Link to="/meditation">Meditation</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <UserBox></UserBox>
    
            
            
        </StyledNavbar>

    )
}