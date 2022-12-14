import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const { toggle } = useContext(ThemeContext);
  return (
    <div data-theme={toggle ? "halloween" : "cmyk"}>
      <Navbar />
      <main className=" my-10 lg:mx-20">{children}</main>
      <Footer />
    </div>
  );
}
