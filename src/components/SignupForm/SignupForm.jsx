import { useEffect, useState } from "react";

export default function SingupForm() {
  const [email, setEmail] = useState(() => {
    return JSON.parse(window.localStorage.getItem("email")) ?? "";
  });
  const [password, setPassword] = useState(() => {
    return JSON.parse(window.localStorage.getItem("password")) ?? "";
  });

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

  useEffect(() => {
    window.localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    window.localStorage.setItem("password", JSON.stringify(password));
  }, [password]);

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
