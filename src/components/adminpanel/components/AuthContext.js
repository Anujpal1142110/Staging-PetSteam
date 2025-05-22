import React, { createContext, useState } from "react";
import api from "../../../api";

// 1) create context
export const AuthContext = createContext();

// 2) provider that wraps your admin panel
export function AuthProvider({ children }) {
  // try to read an existing token from localStorage
  const [token, setToken] = useState(() => {
    return localStorage.getItem("adminToken") || null;
  });

  // your login function: call API, store token
  const login = async ({ username, password }) => {
    // TODO: replace with real API call
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) throw new Error("Invalid credentials");
    const { token } = await res.json();

    // save in state + localStorage
    setToken(token);
    localStorage.setItem("adminToken", token);
  };

  // optional logout helper
  const logout = () => {
    setToken(null);
    localStorage.removeItem("adminToken");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
