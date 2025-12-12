import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"
function Login({ users }) {
  const [registeredUser, setRegisteredUser] = useState("");
  const [registedPassword, setRegisteredPassword] = useState("");

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const found = users.find(
      (u) => u.username === registeredUser && u.password === registedPassword
    );

    if (found) {
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }

    
  }

  return (
   <form className="login-form" onSubmit={handleSubmit}>
  <h1 className="login-form__title">Login Form</h1>

  <div className="login-form__email">
    <h1>👤</h1>
    <input
      type="text"
      placeholder="Email or Phone"
      value={registeredUser}
      onChange={(e) => setRegisteredUser(e.target.value)}
      className="login-form__input"
    />
  </div>

  <div className="login-form__password">
    <h1>🔒</h1>
    <input
      type="password"
      placeholder="Password"
      value={registedPassword}
      onChange={(e) => setRegisteredPassword(e.target.value)}
      className="login-form__input"
    />
  </div>

  <p className="login-form__link">
    <Link to="/forgot">Forget Password?</Link>
  </p>

  <button className="login-form__button">Submit</button>

  <p className="login-form__register">
    Not a Member ? <Link to="/register">Register Now</Link>
  </p>
</form>

  );
}

export default Login;
