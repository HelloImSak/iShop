import { Outlet } from "react-router";
import NavbarOneComponent from "./NavbarOneComponent";
import FooterComponent from "./FooterComponent";

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
