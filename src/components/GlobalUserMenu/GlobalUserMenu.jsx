import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/authSlice";

const GlobalUserMenu = () => {
  const login = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(login);
  return (
    <div>
      {login.login}
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default GlobalUserMenu;
