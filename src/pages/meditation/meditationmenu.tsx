
  import { useContext } from "react";
  import { MedContext } from "./context/medcontext";
import { MeditationMenuStyled } from "./meditationmenu.styled";
import chakraman from "../../assets/img/chakraman.jpg"
  
  export const MeditationMenu = () => {
    const { listmeditation, selectMeditationToDo } = useContext(MedContext);

  
    return (
      <MeditationMenuStyled>
        {listmeditation.map((med: any) => (
      

          <section key={med.key}>
            <img src={chakraman} alt="" />
            <div className="info-wrap">
            <p>{med.emoji}</p>
            <h3>{med.name}</h3>
            <p>{med.description}</p>
            <p>{med.time.h} : {med.time.m} : {med.time.s}</p>
            <button onClick={() => selectMeditationToDo(med)}>Seleziona</button>
            </div>
          </section>
        ))}
            
      </MeditationMenuStyled>
    );
  };
