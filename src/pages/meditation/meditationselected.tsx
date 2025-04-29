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
    <h2>Currently doing</h2>
    <div>
    <p>{medSelected.name}</p>
    <p>{medSelected.instructions}</p>
    </div>
    <Countdown h={medSelected.time.h} m={medSelected.time.m} s={medSelected.time.s}></Countdown>
    </MeditationSelectedStyled>
)
}