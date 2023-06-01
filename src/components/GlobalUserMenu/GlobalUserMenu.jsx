import { useDispatch, useSelector } from "react-redux";
import { getLogin, logOut } from "../../redux/authSlice";
import { useLogOutRedirect } from "../../hooks/useLogOutRedirect";

const GlobalUserMenu = () => {
  useLogOutRedirect();
  const login = useSelector(getLogin);
  const dispatch = useDispatch();
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
