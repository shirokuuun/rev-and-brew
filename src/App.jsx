import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import SEO from "./components/common/SEO";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/common/Footer";
import Landing from "./components/sections/Landing";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

function AppShell() {
  const [entered, setEntered] = useState(
    () => sessionStorage.getItem("kinfolk_entered") === "true",
  );

  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  return (
    <>
      <SEO />
      <ScrollToTop />
      <div id="page-top" aria-hidden="true" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landing" element={<Landing onEnter={() => {}} />} />
      </Routes>
      <Footer />
      {!entered && <Landing onEnter={() => setEntered(true)} />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
