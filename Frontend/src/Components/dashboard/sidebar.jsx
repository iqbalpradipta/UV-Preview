import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Atur overflow pada body
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <button
        className="bg-green-700 text-white p-2 rounded-md fixed top-4 left-4 z-50 lg:hidden text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <div
        className={`fixed top-0 left-0 bg-green-900 text-white h-screen p-4 w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 z-40`}
      >
        <h2 className="font-bold mb-6 w-24">
          <img src="./UVLogo.png" alt="logo UV" />
        </h2>
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
          <div className="fixed bottom-10">
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
