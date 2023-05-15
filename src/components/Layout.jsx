import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/clock">Clock</NavLink>
          <NavLink to="/signup">SingupForm</NavLink>
          <NavLink to="/colorpicker">ColorPicker</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/pockemon">PockemonView</NavLink>
          <NavLink to="/friends">Friends</NavLink>
          <NavLink to="/news">NewsGeneral</NavLink>
          <NavLink to="/user">UserMenu</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Remember everything using Vite</footer>
    </>
  );
};
