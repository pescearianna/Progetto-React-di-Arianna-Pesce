import { useContext} from "react"
import { Countdown } from "../../components/countdown"
import { MedContext } from "./context/medcontext"
import { MeditationSelectedStyled } from "./meditationselected.styled"

export const MeditationSelected = () => {

    const { medSelected } = useContext(MedContext)

    if (!medSelected) {
        return <p>Seleziona una meditazione per iniziare!</p>; 
      }


return(
    <MeditationSelectedStyled>
        <div className="doing-med">
    <p>Currently doing </p>
    <h2>{medSelected.name}</h2>
   
    
    <p>{medSelected.instructions}</p>
    
    </div>
    <div className="timer-spot">
    <Countdown h={medSelected.time.h} m={medSelected.time.m} s={medSelected.time.s}></Countdown>
    </div>
    </MeditationSelectedStyled>
)
}