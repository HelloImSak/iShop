import Layout from "@/components/Layout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
