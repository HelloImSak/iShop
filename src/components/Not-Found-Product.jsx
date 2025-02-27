import { HiShoppingBag } from "react-icons/hi";
import NavbarTwoComponent from "./NavbarTwoComponent";
import FooterComponent from "./FooterComponent";

export default function NotProductsFound() {
  return (
    <>
      <header>
        <NavbarTwoComponent />
      </header>
      {/* <div className="flex flex-col items-center justify-center h-center mt-47">
        <HiShoppingBag className="w-50 h-50 text-gray-400" />
        <p className="text-black-300 mt-4 text-lg font-medium">
          No products were found matching your selection.
        </p>
      </div> */}
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 text-center mt-40">
        <HiShoppingBag className="w-20 h-20 text-gray-400 sm:w-24 sm:h-24 md:w-28 md:h-28" />
        <p className="text-gray-500 mt-4 text-base sm:text-lg md:text-xl font-medium">
          No products were found matching your selection.
        </p>
      </div>

      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}
