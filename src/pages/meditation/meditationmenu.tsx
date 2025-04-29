
  import { useContext } from "react";
  import { MedContext } from "./context/medcontext";
  
  export const MeditationMenu = () => {
    const { listmeditation, selectMeditationToDo } = useContext(MedContext);
  
    return (
      <div>
        {listmeditation.map((med: any) => (
          <section key={med.key}>
            <h3>{med.name}</h3>
            <p>{med.description}</p>
            <button onClick={() => selectMeditationToDo(med)}>Seleziona</button>
          </section>
        ))}
            
      </div>
    );
  };
