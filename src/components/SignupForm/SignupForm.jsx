import useLocalStorage from "../../hooks/useLocalStorage";
import { useLogOutRedirect } from "../../hooks/useLogOutRedirect";

export default function SingupForm() {
  useLogOutRedirect();
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <form autoComplete="off">
      <label>
        <span>E-mail</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        ></input>
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        ></input>
      </label>
      <button type="submit">SingUp</button>
    </form>
  );
}
