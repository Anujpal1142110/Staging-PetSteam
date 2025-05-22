// src/components/adminpanel/components/Login.js

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      // authenticate & store token
      await login({ username, password });
      // on success, send into the protected panel
      navigate("/adminpanel/users", { replace: true });
    } catch (error) {
      setErr(
        error.response?.data?.message ||
          "Login failed – please check credentials"
      );
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "100px auto" }}>
      <h2>Admin Login</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: 20 }}>
          Login
        </button>
      </form>
    </div>
  );
}



