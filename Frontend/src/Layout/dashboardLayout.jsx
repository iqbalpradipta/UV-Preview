import React from "react";
import Sidebar from "../Components/dashboard/sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center bg-green-500 p-4 shadow">
          <div className="text-white text-lg font-bold">
            Dashboard
          </div>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1"
            />
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
