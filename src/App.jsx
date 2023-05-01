import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SingupForm from "./components/SignupForm/SignupForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SingupForm></SingupForm>
    </>
  );
}

export default App;
