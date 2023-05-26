import { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Layout } from "./components/Layout";
const LoginPage = lazy(() => import('./pages/LoginPage'));
const Home = lazy(() => import("./pages/Home"));
const SingupForm = lazy(() => import("./components/SignupForm/SignupForm"));
const ColorPicker = lazy(() => import("./components/ColorPicker/ColorPicker"));
const Counter = lazy(() => import("./components/Counter/Counter"));
const Clock = lazy(() => import("./components/Clock/Clock"));
const PockemonView = lazy(() =>
  import("./components/Pockemon/PockemonView/PockemonView")
);
const Friends = lazy(() => import("./components/Friends/Friends"));
const NewsGeneral = lazy(() =>
  import("./components/News/NewsGeneral/NewsGeneral")
);
const UserMenu = lazy(() => import("./components/UserMenu/UserMenu"));
const Collection = lazy(() => import("./pages/Collection"));
const CollectionDetails = lazy(() => import("./pages/CollectionDetails"));
const CounterWithRedux = lazy(() =>
  import("./components/CounterWithRedux/CounterWithRedux")
);

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
        <Route path="login" element={<LoginPage />} />
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
        <Route path="counter-with-redux" element={<CounterWithRedux />} />
      </Route>
    </Routes>
  );
}

export default App;
