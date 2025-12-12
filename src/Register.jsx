import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./register.css";

function Register({ users, setUsers }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  let navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords are not same");
      return;
    }

    const userDetails = {
      username: user,
      password: password,
    };

    setUsers([...users, userDetails]);

    alert("User Registered Successfully!");

    navigate("/login");

    setUser("");
    setPassword("");
    setConfirm("");

    console.log("All registered users:", [...users, userDetails]);
  }

  return (
    <>
      <form className="register-form" onSubmit={handleRegister}>
  <h1 className="register-form__title">Register Form</h1>

  <div className="register-form__email">
    <h1>👤</h1>
    <input
      type="text"
      placeholder="Email or Phone"
      value={user}
      onChange={(e) => setUser(e.target.value)}
      className="register-form__input"
    />
  </div>

  <div className="register-form__password">
    <h1>🔑</h1>
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="register-form__input"
    />
  </div>

  <div className="register-form__password">
    <h1>🔑</h1>
    <input
      type="password"
      placeholder="Confirm Password"
      value={confirm}
      onChange={(e) => setConfirm(e.target.value)}
      className="register-form__input"
    />
  </div>

  <button className="register-form__button">Register</button>

  <p className="register-form__link">
    Already a Member? <Link to="/login">Sign in Now</Link>
  </p>
</form>

    </>
  );
}

export default Register;
