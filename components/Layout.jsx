import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const { toggle } = useContext(ThemeContext);
  return (
    <div data-theme={toggle ? "halloween" : "cupcake"}>
      <Navbar />
      <main className="mx-5 my-5 lg:mx-20">{children}</main>
      <Footer />
    </div>
  );
}
