import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const { toggle } = useContext(ThemeContext);
  return (
    <div
      // test
      data-theme={toggle ? "halloween" : "cmyk"}
      className="max-w-screen-lg mx-auto"
    >
      <Navbar />
      <main className="selection:bg-primary selection:text-secondary md:mx-16 lg:mx-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
