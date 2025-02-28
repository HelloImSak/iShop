import "flowbite";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";

import logo from "../assets/ishop-light-logo.png";
import SchoolLogo from "../assets/logo-white-version.png";

export default function FooterComponent() {
  return (
    <footer className="bg-primary text-white fixed bottom-0 w-full">
      <div className="p-5">
        <div className="flex flex-row items-center justify-between mx-[100px]">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={logo} className="h-26" alt="iShop Logo" />
            </a>
          </div>
          <div className="grid grid-cols-4 gap-20">
            <div>
              <h2 className="mb-6 text-body font-OpenSanSemiBold uppercase">
                Quick Links
              </h2>
              <ul className="text-gray-300 text-caption hover:underline">
                <li className="mb-2">
                  <a href="#">All Products</a>
                </li>
                <li className="mb-2">
                  <a href="#">Categories</a>
                </li>
                <li className="mb-2">
                  <a href="#">Brand</a>
                </li>
                <li className="mb-2">
                  <a href="#">Discount</a>
                </li>
                <li className="mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-body font-OpenSanSemiBold uppercase">
                Legal
              </h2>
              <ul className="text-gray-300 text-caption hover:underline">
                <li className="mb-2">
                  <a href="#">Term of Service</a>
                </li>
                <li className="mb-2">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="#">Refound Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-body font-OpenSanSemiBold uppercase">
                Contacts
              </h2>
              <ul className="text-gray-300 text-xs">
                <li className="mb-3">
                  <FaPhoneAlt className="inline-block mr-2 text-white" />
                  <p className="inline-block">(+855) 12345678</p>
                </li>
                <li className="mb-3">
                  <MdOutlineEmail className="inline-block w-5 h-5 mr-2 text-white" />
                  <a href="#" className="text-caption hover:underline">
                    iShop@gmail.com
                  </a>
                </li>
              </ul>
              <div className="flex flex-row gap-2">
                <FaFacebook className="w-5 h-5 text-white hover:text-secondary" />
                <FaSquareXTwitter className="w-5 h-5 text-white hover:text-secondary" />
                <FaInstagram className="w-5 h-5 text-white hover:text-secondary" />
                <FaTelegram className="w-5 h-5 text-white hover:text-secondary"/>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-body font-OpenSanSemiBold uppercase">
                Organized by
              </h2>
              <img src={SchoolLogo} alt="iStad" className="h-20" />
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-600" />
        <div className="flex flex-col items-center justify-center">
          <span className="text-xs text-gray-300">
            © 2025{" "}
            <a href="#" className="text-caption hover:underline">
              iShop | All Rights Reserved.
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
