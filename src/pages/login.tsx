import {auth, provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    
    const signInWithGoogle = async() => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
    }



    return (
        <>
        <h1>Login</h1>
        <p>Sign In With Google to continue</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
        </>
        
    )
};