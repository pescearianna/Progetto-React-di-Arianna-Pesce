


import { useState } from "react";
import { MedContext } from "./context/medcontext";
import { StyledMeditation } from "./meditation.styled";
import { MeditationMenu } from "./meditationmenu";
import { MeditationSelected } from "./meditationselected";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";



export const Meditation = () => {

  
   
const listmeditation = [
    { key: 0,
      name: "Respiro", 
      description: "Focalizzati sul respiro", 
      time: { h: 0, m: 5, s: 0 },
      instructions: "Breath deeply 5 seconds"

    },
    { key: 1, name: "Amorevole", description: "Coltiva amore e gentilezza", time: { h: 0, m: 20, s: 0 },instructions: "Breath deeply 5 seconds" },
    { key: 2, name: "Consapevolezza", description: "Sii presente nel momento", time: { h: 0, m: 0, s: 5 }, instructions: "Breath deeply 5 seconds" },
    { key: 3, name: "Gratitudine", description: "Ringrazia profondamente", time: { h: 0, m: 30, s: 0 } ,instructions: "Breath deeply 5 seconds" },
    { key: 4, name: "Visualizzazione", description: "Crea immagini positive", time: { h: 1, m: 0, s: 0 }, instructions: "Breath deeply 5 seconds" },
  ];

  const [medSelected, setMedSelected] = useState()

  const selectMeditationToDo = (med:any) => {
    setMedSelected(med);
  };

  const [user] = useAuthState(auth);
const signOutUser = async() => {
    await signOut(auth);
}


    return (
            <>

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
        
        <StyledMeditation>
        <h1>MEDITATION</h1>

        if (condition) {
          
        }
        
        <MedContext.Provider value={ {listmeditation, medSelected, selectMeditationToDo} }>
                <MeditationSelected/>
                <MeditationMenu/>
        </MedContext.Provider>
        
        
        
        </StyledMeditation>
        </>
    )
};