import React, { useState } from "react";
import Cookies from "js-cookie";
import "../loginPage/login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mailerror, setMailError] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email) {
      setMailError(true);
    }
    if (!password) {
      setPasswordErr(true);
    }

    try {
      const response = await fetch(
        "http://localhost:3003/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        // Handle successful login (e.g., redirect to dashboard)
        const data = await response.json();
        // console.log(data)
        login(data);
        toast.success("Login Successful");
        navigate("/myblogs");
      } else {
        // Handle login failure (e.g., display error message)
        console.error("Login failed:", response.statusText);
        navigate("/login");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="loginBgContainer">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {mailerror && <p className="errormsg">* Required Field</p>}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordErr && <p className="errormsg">Required Field</p>}
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;

