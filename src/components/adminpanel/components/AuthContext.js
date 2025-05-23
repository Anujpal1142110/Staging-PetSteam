import React, { createContext, useState } from "react";
import api from "../../../api";

// 1) create context
export const AuthContext = createContext();

// 2) provider that wraps your adminpanel panel
export function AuthProvider({ children }) {
  // try to read an existing token from localStorage
  const [token, setToken] = useState(() => {
    return localStorage.getItem("adminpanelToken") || null;
  });

  // your login function: call API, store token
  const login = async ({ username, password }) => {
    // TODO: replace with real API call
    const res = await fetch("/api/adminpanel/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) throw new Error("Invalid credentials");
    const { token } = await res.json();

    // save in state + localStorage
    setToken(token);
    localStorage.setItem("adminpanelToken", token);
  };

  // optional logout helper
  const logout = () => {
    setToken(null);
    localStorage.removeItem("adminpanelToken");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
