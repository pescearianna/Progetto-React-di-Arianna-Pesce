import { useContext, useState } from "react";
import { MedContext } from "./context/medcontext";
import { MeditationMenuStyled } from "./meditationmenu.styled";

export const MeditationMenu = () => {
  const { listmeditation, selectMeditationToDo } = useContext(MedContext);

  const [personalH, setPersonalH] = useState(listmeditation[0].time.h);
  const [personalM, setPersonalM] = useState(listmeditation[0].time.m);
  const [personalS, setPersonalS] = useState(listmeditation[0].time.s);

  const adjustTime = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    operation: "add" | "sub",
    max: number = 59
  ) => {
    setter((prev) => {
      if (operation === "add") {
        return prev < max ? prev + 1 : max;
      } else {
        return prev > 0 ? prev - 1 : 0;
      }
    });
  };

  return (
    <MeditationMenuStyled>
      {listmeditation.map((med: any) => (
        <section key={med.key}>
          <div className="info-wrap">
            <img src={med.emoji} alt="chakra meditation" />

            <h3>{med.name}</h3>
            <p>{med.description}</p>
            {med.key === 0 ? (
              <div className="personal-time-container">
                <div className="setting-time">
                  <button onClick={() => adjustTime(setPersonalH, "add")}>
                    +
                  </button>
                  {String(personalH).padStart(2, "0")}
                  <button onClick={() => adjustTime(setPersonalH, "sub")}>
                    -
                  </button>
                </div>
                <p>:</p>
                <div className="setting-time">
                  <button onClick={() => adjustTime(setPersonalM, "add")}>
                    +
                  </button>
                  {String(personalM).padStart(2, "0")}
                  <button onClick={() => adjustTime(setPersonalM, "sub")}>
                    -
                  </button>
                </div>
                <p>:</p>
                <div className="setting-time">
                  <button onClick={() => adjustTime(setPersonalS, "add")}>
                    +
                  </button>
                  {String(personalS).padStart(2, "0")}
                  <button onClick={() => adjustTime(setPersonalS, "sub")}>
                    -
                  </button>
                </div>
              </div>
            ) : (
              <p id="timer">
                {String(med.time.h).padStart(2, "0")} :{" "}
                {String(med.time.m).padStart(2, "0")} :{" "}
                {String(med.time.s).padStart(2, "0")}
              </p>
            )}

            <button
              className="meditationbutton"
              onClick={() =>
                selectMeditationToDo({
                  ...med,
                  time:
                    med.key === 0
                      ? { h: personalH, m: personalM, s: personalS }
                      : med.time,
                })
              }
            >
              START
            </button>
          </div>
        </section>
      ))}
    </MeditationMenuStyled>
  );
};
