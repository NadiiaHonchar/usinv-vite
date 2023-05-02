import { useState, useEffect, useRef } from "react";
import { ClockFase } from "./Clock.styled";

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 2000);

    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <ClockFase> Current time: {time.toLocaleTimeString()}</ClockFase>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
}
