import { useEffect, useRef, useState } from "react";
import { StyledCountdown } from "./countdown.styled";

import dongTibet from "../assets/sounds/bell-ring.mp3";

export const Countdown = ({ h = 0, m = 0, s = 5 }) => {
  let [active, setActive] = useState(false);

  const startStop = () => setActive((prev) => !prev);

  const [time, setTime] = useState(h * 3600 + m * 60 + s);
  const resetCountdown = useRef(time);

  useEffect(() => {
    if (active === true && time > 0) {
      let timer = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [active, time]);

  useEffect(() => {
    const newTime = h * 3600 + m * 60 + s;
    setTime(newTime);
    resetCountdown.current = newTime;
  }, [h, m, s]);

  const playSound = () => {
    const audio = new Audio(dongTibet);
    audio.play();
  };

  useEffect(() => {
    if (time === 0) {
      playSound();

      setActive(false); // opzionale: fermare il timer
    }
  }, [time]);

  const myTime = (mytime: any) => {
    const h = Math.floor(mytime / 3600);
    const m = Math.floor((mytime % 3600) / 60);
    const s = mytime % 60;
    return {
      hours: String(h).padStart(2, "0"),
      minutes: String(m).padStart(2, "0"),
      seconds: String(s).padStart(2, "0"),
    };
  };

  let displayTime = myTime(time);

  const resetTimer = () => {
    setActive((active = false));
    return setTime(resetCountdown.current);
  };

  return (
    <StyledCountdown>
      <div className="content">
        <p>
          {displayTime.hours} : {displayTime.minutes} : {displayTime.seconds}
        </p>
      </div>
      <div className="commands">
        <button className="command" id="volumeup">
          <i className="bi bi-volume-up-fill">
            <span className="tooltiptext">Please, turn up the volume</span>
          </i>
        </button>
        <button className="command" id="play" onClick={startStop}>
          {" "}
          {active === true ? (
            <i className="bi bi-stop"></i>
          ) : (
            <i className="bi bi-play"></i>
          )}{" "}
        </button>
        <button className="command" id="reset" onClick={resetTimer}>
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
      </div>
    </StyledCountdown>
  );
};
