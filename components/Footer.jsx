import React, { useContext } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { toggle } = useContext(ThemeContext);
  const year = new Date().getFullYear();
  return (
    <footer
      className={`footer footer-center p-10 ${
        toggle ? "bg-base-300" : "bg-base-200"
      } text-base-content rounded`}
    >
      <article>
        <a href="#hero" className="text-lg font-bold">
          Ahanaf
        </a>
      </article>
      <div className="grid grid-flow-col gap-4">
        <a href="#hero" className="link link-hover">
          Home
        </a>
        <a href="#about" className="link link-hover">
          About
        </a>
        <a id="portfolios" className="link link-hover">
          Portfolio
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/Ahanafabdullah1" target="_blank">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/ahanafabdullah9" target="_blank">
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a href="https://github.com/AhanafVai" target="_blank">
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
      <div>
        <p className={`${toggle ? "text-primary" : "text-black"}`}>
          Copyright © {year} - All right reserved by Ahanaf
        </p>
      </div>
    </footer>
  );
};

export default Footer;
