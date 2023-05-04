import { CounterButton, CounterControls } from "./Counter.styled";

export default function Controls({ onClick }) {
  return (
    <CounterControls>
      <CounterButton onClick={() => onClick({ type: "decrement", payload: 1 })}>
        -1
      </CounterButton>
      <CounterButton onClick={() => onClick({ type: "increment", payload: 1 })}>
        +1
      </CounterButton>
    </CounterControls>
  );
}
