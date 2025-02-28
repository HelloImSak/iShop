import { Outlet } from "react-router";
import FooterComponent from "./FooterComponent";
import NavbarOneComponent from "./NavbarOneComponent";

export default function Layout() {
  return (
    <>
      <header>
        <NavbarOneComponent />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}
