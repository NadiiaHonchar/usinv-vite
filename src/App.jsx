import { useState } from "react";
import "./App.css";
import SingupForm from "./components/SignupForm/SignupForm";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
import Clock from "./components/Clock/Clock";
import PockemonView from "./components/Pockemon/PockemonView/PockemonView";
import Friends from "./components/Friends/Friends";
import NewsGeneral from "./components/News/NewsGeneral/NewsGeneral";
import UserMenu from "./components/UserMenu/UserMenu";
import { NavLink, Route, Routes } from "react-router-dom";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <NavLink to="/">Clock</NavLink>
        <NavLink to="/signup">SingupForm</NavLink>
        <NavLink to="/colorpicker">ColorPicker</NavLink>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/pockemon">PockemonView</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/news">NewsGeneral</NavLink>
        <NavLink to="/user">UserMenu</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/signup" element={<SingupForm />} />
        <Route
          path="/colorpicker"
          element={<ColorPicker options={colorPickerOptions} />}
        />
        <Route path="/counter" element={<Counter initialValue={0} />} />
        <Route path="/pockemon" element={<PockemonView />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/news" element={<NewsGeneral />} />
        <Route path="/user" element={<UserMenu />} />
      </Routes>
    </>
  );
}

export default App;
