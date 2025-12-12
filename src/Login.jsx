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
    <form onSubmit={handleSubmit}>
      <h1>Login Form</h1>
      <div className="loginEmail">
        <h1>👤</h1>
        <input
          type="text"
          placeholder="Email or Phone"
          value={registeredUser}
          onChange={(e) => setRegisteredUser(e.target.value)}
        />
      </div>
      <div className="passwordInput">
        <h1>🔒</h1>
        <input
          type="password"
          placeholder="Password"
          value={registedPassword}
          onChange={(e) => setRegisteredPassword(e.target.value)}
        />
      </div>

      <p>
        <Link to="/forgot">Forget Password?</Link>
      </p>

      <button>Submit</button>

      <p>
        Not a Member ? <Link to="/register">Register Now</Link>
      </p>
    </form>
  );
}

export default Login;
