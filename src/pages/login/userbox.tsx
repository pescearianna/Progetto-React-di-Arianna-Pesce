

import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { UserBoxStyled } from "./userbox.styled";

export const UserBox = () => {

    const [user] = useAuthState(auth);
    const signOutUser = async() => {
        await signOut(auth);
    }
    
        return (
           <>
                {user && (
                    <UserBoxStyled>
                    
                <img id="photoprofile" src={user?.photoURL || ""} alt="user-photo-profile" />
                <button onClick={signOutUser}>Log Out</button>
                </UserBoxStyled>
                )
                }
            </>
        )
    }



