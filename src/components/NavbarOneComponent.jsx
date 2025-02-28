import "flowbite";
import { useState } from "react";
import { BsCart, BsMouse3 } from "react-icons/bs";
import { CiSpeaker } from "react-icons/ci";
import { FaRegKeyboard } from "react-icons/fa";
import { GiHeadphones } from "react-icons/gi";
import profileImg from "../assets/matra.jpg";

import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosDesktop,
  IoIosLaptop,
  IoIosPhonePortrait,
} from "react-icons/io";
import logo from "../assets/ishop-dark-logo.png";

const NavbarOneComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real auth logic
  const [cartItems, setCartItems] = useState(3); // Replace with real cart data

  return (
    <nav className="bg-white/50 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <p className="text-white text-small bg-primary text-center py-1">
        Get 30% off when you spend over $200.
      </p>
      <div className="max-w-screen flex flex-row items-center justify-between mx-[100px] font-OpenSanBold">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-14" alt="iShop Logo" />
        </a>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-row gap-16 font-medium p-4">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary hover:text-secondary"
              >
                All Products
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-primary hover:text-secondary"
              >
                Categories
                {isDropdownOpen ? (
                  <IoIosArrowUp className="w-5 h-5 ms-2.5 transition-transform duration-300" />
                ) : (
                  <IoIosArrowDown className="w-5 h-5 ms-2.5 transition-transform duration-300" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="z-10 absolute bg-white/50 backdrop-blur-md divide-y w-[400px] divide-gray-100 rounded-lg shadow-sm mt-2">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-100 justify-between hover:text-secondary">
                      <div className="flex items-center gap-2.5">
                        <IoIosPhonePortrait className="w-[26px] h-[26px]" />
                        <a href="#" className="block px-4 py-2 ">
                          Phone
                        </a>
                      </div>
                      <IoIosArrowForward className="w-[18px] h-[18px]" />
                    </li>
                    <li className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-100 justify-between  hover:text-secondary">
                      <div className="flex items-center gap-2.5">
                        <IoIosLaptop className="w-[26px] h-[26px]" />
                        <a href="#" className="block px-4 py-2">
                          Laptop
                        </a>
                      </div>
                      <IoIosArrowForward className="w-[18px] h-[18px]" />
                    </li>
                    <li className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-100 justify-between  hover:text-secondary">
                      <div className="flex items-center gap-2.5">
                        <IoIosDesktop className="w-[26px] h-[26px]" />
                        <a href="#" className="block px-4 py-2">
                          Desktop
                        </a>
                      </div>
                      <IoIosArrowForward className="w-[18px] h-[18px]" />
                    </li>
                    <li className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-100 justify-between  hover:text-secondary">
                      <div className="flex items-center gap-2.5">
                        <FaRegKeyboard className="w-[26px] h-[26px]" />
                        <a href="#" className="block px-4 py-2">
                          Keyboard
                        </a>
                      </div>
                      <IoIosArrowForward className="w-[18px] h-[18px]" />
                    </li>
                    <li className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-100 justify-between  hover:text-secondary">
                      <div className="flex items-center gap-2.5">
                        <BsMouse3 className="w-[26px] h-[26px]" />
                        <a href="#" className="block px-4 py-2">
                          Mouse
                        </a>
                      </div>
                      <IoIosArrowForward className="w-[18px] h-[18px]" />
                    </li>
                    <li className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-100 justify-between  hover:text-secondary">
                      <div className="flex items-center gap-2.5">
                        <CiSpeaker className="w-[26px] h-[26px]" />
                        <a href="#" className="block px-4 py-2">
                          Speaker
                        </a>
                      </div>
                      <IoIosArrowForward className="w-[18px] h-[18px]" />
                    </li>
                    <li className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-100 justify-between hover:text-secondary">
                      <div className="flex items-center gap-2.5">
                        <GiHeadphones className="w-[26px] h-[26px]" />
                        <a href="#" className="block px-4 py-2 ">
                          Headphone
                        </a>
                      </div>
                      <IoIosArrowForward className="w-[18px] h-[18px] hover:text-secondary" />
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary  hover:text-secondary"
              >
                Brand
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary hover:text-secondary"
              >
                Discount
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary hover:text-secondary"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-11">
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-[400px] px-2 mx-auto"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-4 h-4 my-auto text-black_50 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search your product..."
                  className="w-full py-2 h-[40px] pl-12 pr-4 text-black_50 font-OpenSan text-small border-[1px] rounded-md outline-none bg-gray-50 focus:bg-white focus:border-primary"
                />
              </div>
            </form>
          </div>
          <div>
            {isLoggedIn ? (
              <div className="flex items-center gap-10">
                <a href="/cart" className="relative">
                  <BsCart className="text-primary text-2xl hover:text-secondary" />
                  {cartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                      {cartItems}
                    </span>
                  )}
                </a>
                <a href="/profile">
                  <img
                    src={profileImg}
                    alt="profile"
                    className="w-12 h-12 rounded-full border"
                  />
                </a>
              </div>
            ) : (
              <button
                type="button"
                className="py-2 px-6 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOneComponent;
