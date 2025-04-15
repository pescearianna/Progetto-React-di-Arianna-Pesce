import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { StyledNavbar } from "./styles/navbar.styled";

export const Navbar = () => {

const [user] = useAuthState(auth);
const signOutUser = async() => {
    await signOut(auth);
}

    return (
        <StyledNavbar>

            <Link to="/">Home</Link>
            { !user ? (
                <Link to="/login">Login</Link>
            ) : (
                <Link to="/createpost">Post</Link>  
            )}

            <Link to="/meditation">Meditation</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

            <div>
                {user && (
                    <>
                    <p>{user?.displayName}</p>
                <img src={user?.photoURL || ""} width="20" height="20" alt="user-photo-profile" />
                <button onClick={signOutUser}>Log Out</button>
                </>
                )
                }
            </div>
        </StyledNavbar>
    )
}