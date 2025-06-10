import { Link } from "react-router-dom";
import { StyledNavbar } from "./navbar.styled";
import { useMediaQuery as useResponsiveQuery } from 'react-responsive';
import { useState } from "react";


export const Navbar = () => {


  const isMobile = useResponsiveQuery({ query: '(max-width: 768px)' });
  
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(prev => !prev)
  }

  const closeMenu = () => {
    setOpen(false);
  }

  const navLinks = (
    <div className="menu-link">
      <Link to="/" onClick={closeMenu}>Home</Link>
      <Link to="/meditation" onClick={closeMenu}>Meditation</Link>
      <Link to="/about" onClick={closeMenu}>About</Link>
      <Link to="/contact" onClick={closeMenu}>Contact</Link>
      
    </div>
  );


    return (
        <StyledNavbar>

             {isMobile ? (
        <>
          <button className="toggle-menu" onClick={openMenu} aria-label="Toggle menu">
            {open ? (<i className="bi bi-x-lg"></i>):(<i className="bi bi-list"></i>)}
          </button>
          {open && navLinks}
        </>

        
      ) : (
        navLinks
      )}
            
        </StyledNavbar>

    )
}
