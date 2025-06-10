

import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { UserBoxStyled } from "./userbox.styled";
import fakeUser from "../../assets/img/photo-profile.jpg";

export const UserBox = () => {

    const [user] = useAuthState(auth);
    const signOutUser = async() => {
        await signOut(auth);
    }

    const avatarSrc = user?.photoURL || fakeUser;
    
        return (
           <>
                {user && (
                    <UserBoxStyled>
                    
                <img
        id="photoprofile"
        src={avatarSrc}
        alt="user-photo-profile"
        onError={(e) => { e.currentTarget.src = fakeUser; }}
      />
                <button onClick={signOutUser}><i className="bi bi-door-open-fill"></i><span className="tooltiptext">Log Out</span></button>
                </UserBoxStyled>
                )
                }
            </>
        )
    }



