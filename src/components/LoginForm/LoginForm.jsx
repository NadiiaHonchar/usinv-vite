import { useDispatch } from "react-redux";
import { logIn } from "../../redux/authSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const hanleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        login: form.elements.login.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={hanleSubmit}>
      <input type="text" name="login" placeholder="login"></input>
      <input type="password" name="password" placeholder="password"></input>
      <button type="submit">LogIn</button>
    </form>
  );
};
