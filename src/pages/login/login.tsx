import {auth, provider} from "../../config/firebase";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { StyledLogin } from "./login.styled";

export const Login = () => {
    const navigate = useNavigate();
    
    const signInWithGoogle = async() => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/meditation");
    }



    return (
        <StyledLogin>
        <h2 className="bigtitle">Login</h2>
        <div className="section">
        <p>Please, Sign In With Google to continue...</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
        </StyledLogin>
        
    )
};