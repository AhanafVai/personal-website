import React, { useContext, useEffect, useState } from "react";
import { AiOutlineAppstoreAdd, AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { toggle, toggleFunction } = useContext(ThemeContext);
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <nav
      className={` ${
        isSticky ? "sticky z-20 opacity-95 shadow top-0" : "static"
      }   navbar px-5 md:px-20 bg-base-100`}
    >
      <div className="flex-1 lg:flex-none">
        <Link to="hero" className="text-lg font-bold hover:text-primary">
          Ahanaf
        </Link>
      </div>
      <div className="flex justify-end flex-1  ">
        <div className="flex items-stretch">
          <ul className="menu menu-horizontal hidden sm:flex">
            <li>
              <Link
                activeClass="border-b-2 border-primary"
                to="hero"
                spy={true}
                smooth={true}
                offset={-200}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="border-b-2 border-primary"
                to="about"
                spy={true}
                smooth={true}
                offset={-200}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="border-b-2 border-primary"
                to="service"
                spy={true}
                smooth={true}
                offset={-200}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="border-b-2 border-primary"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-200}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="border-b-2 border-primary"
                to="contact"
                spy={true}
                smooth={true}
                offset={-200}
              >
                Contact
              </Link>
            </li>
            <li>
              <label className="swap swap-rotate">
                <input type="checkbox" />
                <div
                  onClick={toggleFunction}
                  className="swap-on fill-current w-5 h-5"
                >
                  <ImSun className="text-amber-500" />
                </div>

                <div
                  onClick={toggleFunction}
                  className="swap-off fill-current w-5 h-5"
                >
                  <BsFillMoonStarsFill className="text-sky-500" />
                </div>
              </label>
            </li>
          </ul>

          <label htmlFor="my-modal-4" className="text-2xl  sm:hidden ">
            <AiOutlineAppstoreAdd />
          </label>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label
            htmlFor="my-modal-4"
            className="modal modal-bottom sm:modal-middle cursor-pointer"
          >
            <label className="modal-box relative">
              <div className="flex justify-between">
                <label htmlFor="my-modal-4" className=" text-2xl ">
                  <AiOutlineClose className="text-red-500" />
                </label>
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <div
                    onClick={toggleFunction}
                    className="swap-on fill-current w-5 h-5"
                  >
                    <ImSun className="text-amber-500" />
                  </div>

                  <div
                    onClick={toggleFunction}
                    className="swap-off fill-current w-5 h-5"
                  >
                    <BsFillMoonStarsFill className="text-sky-500" />
                  </div>
                </label>
              </div>
              <ul className="flex flex-wrap justify-center gap-10 p-10 text-base">
                <li>
                  <Link
                    activeClass="text-primary"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-200}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="text-primary"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-200}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="text-primary"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-200}
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="text-primary"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-200}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="text-primary"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-200}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </label>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
