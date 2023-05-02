import { useEffect, useRef, useState } from "react";
import { ClockFase } from "./Clock.styled";

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalID = useRef(null);

  useEffect(() => {
    intervalID.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalID.current);
  };

  return (
    <>
      <ClockFase>{time.toLocaleTimeString()}</ClockFase>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </>
  );
}
