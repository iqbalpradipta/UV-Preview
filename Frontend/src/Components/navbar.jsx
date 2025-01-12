import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  const [auth, setAuth] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const authHandlerButton = () => {
    setAuth(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div>
        <nav className="bg-green-600 shadow-md p-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              className="w-14"
              src="/UVLogo.png"
              alt="UVLogo"
            />
          </div>

          {/* Search Input (Hidden on small screens) */}
          <div className="hidden lg:flex flex-grow mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Quick search..."
                className="w-full py-3 px-4 ps-11 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 flex items-center pointer-events-none ps-4">
                <AiOutlineSearch />
              </div>
            </div>
          </div>

          {/* Authentication and Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            {!auth ? (
              <>
                <button
                  type="button"
                  onClick={authHandlerButton}
                  className="py-2 px-6 inline-flex items-center text-sm font-medium rounded-lg border border-white text-white hover:border-black hover:text-black"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="py-2 px-6 inline-flex items-center text-sm font-medium rounded-lg border border-transparent bg-green-700 text-white hover:bg-green-500 hover:text-gray-600"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="py-2 px-2 inline-flex items-center text-sm font-medium"
                >
                  <SlBasket style={{ width: 30, height: 30 }} />
                </button>
                <button
                  type="button"
                  className="py-2 px-5 inline-flex items-center text-sm font-medium"
                >
                  <CgProfile style={{ width: 30, height: 30, marginRight: 10 }} />
                  <div>Hallo, Iqbal Pradipta</div>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none w-12"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Menu (Shown when mobile menu is open) */}
        {isMobileMenuOpen && (
          <div className="bg-green-600 text-white lg:hidden">
            <div className="p-4">
              <input
                type="text"
                placeholder="Quick search..."
                className="w-full py-2 px-4 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="p-4 space-y-4">
              {!auth ? (
                <>
                  <button
                    type="button"
                    onClick={authHandlerButton}
                    className="w-full py-2 px-6 inline-flex items-center text-sm font-medium rounded-lg border border-white text-white hover:border-black hover:text-black"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="w-full py-2 px-6 inline-flex items-center text-sm font-medium rounded-lg border border-transparent bg-green-700 text-white hover:bg-green-500 hover:text-gray-600"
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="w-full py-2 px-2 inline-flex items-center text-sm font-medium"
                  >
                    <SlBasket style={{ width: 30, height: 30 }} />
                  </button>
                  <button
                    type="button"
                    className="w-full py-2 px-5 inline-flex items-center text-sm font-medium"
                  >
                    <CgProfile style={{ width: 30, height: 30, marginRight: 10 }} />
                    <div>Hallo, Iqbal Pradipta</div>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;