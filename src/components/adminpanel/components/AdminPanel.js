import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar    from "./Sidebar";
import Header     from "./Header";
import UsersTable from "./UsersTable";

export default function AdminPanel() {
  return (
    <div className="admin-layout" style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div className="admin-main" style={{ flex: 1, padding: 20 }}>
        <Header />

        <Routes>
          {/** When you hit /adminpanel exactly, go to users */}
          <Route index element={<Navigate to="users" replace />} />

          {/** Your protected sub‐page */}
          <Route path="users" element={<UsersTable />} />

          {/** Add more protected pages here:
              <Route path="reports" element={<Reports />} />
          */}
        </Routes>
      </div>
    </div>
  );
}

