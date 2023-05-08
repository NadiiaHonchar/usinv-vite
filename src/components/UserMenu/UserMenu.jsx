import { useContext } from "react";
import ctx from "../context/auth/Context";

export default function UserMenu() {
  const authContext = useContext(ctx);
  return (
    <div>
      {authContext.user && (
        <>
          <img src={authContext.user.avatar} alt="" width="32" height="32" />
          <p>Hello, {authContext.user.name}</p>
          <button type="button" onClick={authContext.onLogOut}>
            EXIT
          </button>
        </>
      )}
      {!authContext.user && (
        <>
          <button type="button" onClick={authContext.onLogIn}>
            ENTER
          </button>
        </>
      )}
    </div>
  );
}
