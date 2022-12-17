import React, { useContext } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
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
        <Link
          to="hero"
          className=" font-bold hover:text-primary md:text-xl lg:text-4xl"
        >
          Ahanaf
        </Link>
      </article>
      <div className="grid grid-flow-col gap-4">
        <Link to="hero" className="hover:border-b-2 border-black md:text-xl">
          Home
        </Link>
        <Link to="about" className="hover:border-b-2 border-black md:text-xl">
          About
        </Link>
        <Link
          to="portfolio"
          className="hover:border-b-2 border-black md:text-xl"
        >
          Portfolio
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/Ahanafabdullah1" target="_blank">
            <FaTwitter className="text-2xl hover:text-primary md:text-4xl" />
          </a>
          <a href="https://www.linkedin.com/in/ahanafabdullah9" target="_blank">
            <FaLinkedinIn className="text-2xl hover:text-primary md:text-4xl" />
          </a>
          <a href="https://github.com/AhanafVai" target="_blank">
            <FaGithub className="text-2xl hover:text-primary md:text-4xl" />
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
