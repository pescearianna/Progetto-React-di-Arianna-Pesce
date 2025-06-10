import { useContext} from "react"
import { Countdown } from "../../components/countdown"
import { MedContext } from "./context/medcontext"
import { MeditationSelectedStyled } from "./meditationselected.styled"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../config/firebase"

export const MeditationSelected = () => {

    const { medSelected } = useContext(MedContext);

     const [user] = useAuthState(auth);



return(

      <MeditationSelectedStyled>
        <div className="shadow">
    { !medSelected ? (
        <div className="box">
            
        <h3 className="typewriter">Welcome {user?.displayName}!</h3>
          
        <div className="choose">
        <p>Choose a</p> 
        <p>meditacion</p> 
        <p>to start!</p>
        <i className="bi bi-arrow-down"></i>
        </div>
        </div>
    ) : (
    <>
    <div className="doing-med">
    <img src={medSelected.emoji} alt="chakra meditation" />
    <h2>{medSelected.name}</h2>
   
    
    <p id="instr">{medSelected.instructions}</p>
    
    </div>
    <div className="timer-spot">
    <Countdown h={medSelected.time.h} m={medSelected.time.m} s={medSelected.time.s}></Countdown>
    </div>
    </>
    )
}</div>
        
    </MeditationSelectedStyled>
);
}