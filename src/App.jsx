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
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import CollectionDetails from "./pages/CollectionDetails";
import { Layout } from "./components/Layout";

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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collection" element={<Collection />} />
        <Route
          path="collection/:collectionID"
          element={<CollectionDetails />}
        />
        <Route path="clock" element={<Clock />} />
        <Route path="signup" element={<SingupForm />} />
        <Route
          path="colorpicker"
          element={<ColorPicker options={colorPickerOptions} />}
        />
        <Route path="counter" element={<Counter initialValue={0} />} />
        <Route path="pockemon" element={<PockemonView />} />
        <Route path="friends" element={<Friends />} />
        <Route path="news" element={<NewsGeneral />} />
        <Route path="user" element={<UserMenu />} />
      </Route>
    </Routes>
  );
}

export default App;
