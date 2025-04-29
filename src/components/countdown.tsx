import { useEffect, useRef, useState } from "react";
import { StyledCountdown } from "./countdown.styled";

  


export const Countdown = ({h = 0, m = 20 ,s = 0}) => {
  
    let [active, setActive] = useState(false)

    const startStop = () => setActive(prev => !prev)

    const [time, setTime] = useState(h*3600 + m*60 + s);
    const resetCountdown = useRef(time);

    useEffect(() => {
      if(active === true && time>0){let timer = setTimeout(() => {
          setTime((time) => time - 1);
        }, 1000);
        return () => clearTimeout(timer)}
      }, [active, time]);

      useEffect(() => {
        const newTime = h * 3600 + m * 60 + s;
        setTime(newTime);
        resetCountdown.current = newTime;
      }, [h, m, s]);

      
      
          useEffect(() => {
            if (time === 0 ) {
              const audio = new Audio("../assets/sounds/bell-ring.mp3");
              audio.play()
        
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
        }
    }

    let displayTime = myTime(time);
     

const resetTimer = () => {
    setActive(active = false);
    return setTime(resetCountdown.current)
}

    
   

return (
    <StyledCountdown>
    <h3>Timer:</h3>
    <div className="content">

        <p>{displayTime.hours} : {displayTime.minutes} : {displayTime.seconds}</p>
        
    </div>
    <div>
        <button onClick={startStop}> {active === true? 'STOP':'PLAY'} </button>
        <button onClick={resetTimer}> RESET </button>
    </div>
    </StyledCountdown>
)

}