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
      <form onSubmit={handleRegister}>
        <h1>Register Form</h1>

        <div className="registerEmail">
          <h1>👤</h1>
          <input
            type="text"
            placeholder="Email or Phone"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="passwordInput">
          <h1>🔑</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="passwordInput">
          <h1>🔑</h1>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        <button>Register</button>

        <p>
          Already a Member? <Link to="/login">Sign in Now</Link>
        </p>
      </form>
    </>
  );
}

export default Register;
