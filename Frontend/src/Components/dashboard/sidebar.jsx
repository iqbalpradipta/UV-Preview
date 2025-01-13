import React from "react";

function Sidebar() {
  return (
    <>
      <div className="w-64 bg-green-900 text-white h-screen p-4">
        <h2 className="font-bold mb-6 w-24"><img src='./UVLogo.png' alt='logo UV'/></h2>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Input Product
              </a>
            </li>
          </ul>
          <div className="flex items-end fixed" style={{bottom:40}}>
          <button className="bg-green-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600">
            Login
          </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
