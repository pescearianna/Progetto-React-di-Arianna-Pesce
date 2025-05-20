
  import { useContext } from "react";
  import { MedContext } from "./context/medcontext";
import { MeditationMenuStyled } from "./meditationmenu.styled";

  
  export const MeditationMenu = () => {
    const { listmeditation, selectMeditationToDo } = useContext(MedContext);

  
    return (
      <MeditationMenuStyled>
        {listmeditation.map((med: any) => (
      

          <section key={med.key}>
            
            <div className="info-wrap">
            <img src={med.emoji} alt="chakra meditation" />
            
            <h3>{med.name}</h3>
            <p>{med.description}</p>
            <p id="timer">{String(med.time.h).padStart(2, "0")} : {String(med.time.m).padStart(2, "0")} : {String(med.time.s).padStart(2, "0")}</p>
            <button className="meditationbutton" onClick={() => selectMeditationToDo(med)}>START</button>
            </div>
          </section>
        ))}
            
      </MeditationMenuStyled>
    );
  };
