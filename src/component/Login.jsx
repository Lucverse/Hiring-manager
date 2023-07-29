import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("mncusers")) || [];
    const user = users.find((user) => user.email === email);

    if (!user) {
      alert("Invalid email. Please try again.");
    } else if (user.password !== password) {
      alert("Invalid password. Please try again.");
    } else {
      dispatch(login(user));
      alert("Login successful!");
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-page">
        <h3>Login Page</h3>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
