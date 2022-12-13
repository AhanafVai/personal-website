import React, { useContext } from "react";
import { AiOutlineAppstoreAdd, AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { toggle, toggleFunction } = useContext(ThemeContext);

  return (
    <nav className="navbar px-5 lg:px-20 ">
      <div className="flex-1 lg:flex-none">
        <a className="text-lg font-bold">Ahanaf</a>
      </div>
      <div className="flex justify-end flex-1  ">
        <div className="flex items-stretch">
          <ul className=" menu menu-horizontal  hidden sm:flex">
            <li>
              <a
                href="#home"
                id="home"
                className="target:border-b-2 border-primary"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                id="about"
                className="target:border-b-2 border-primary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                id="service"
                className="target:border-b-2 border-primary"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                id="portfolio"
                className="target:border-b-2 border-primary"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                id="contact"
                className="target:border-b-2 border-primary"
              >
                Contact
              </a>
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
              <ul className="grid grid-cols-3 gap-3 justify-center p-5">
                <li className="py-5">
                  <a>Home</a>
                </li>

                <li className="py-5">
                  <a>About</a>
                </li>
                <li className="py-5">
                  <a>Service</a>
                </li>
                <li className="py-5">
                  <a>Portfolio</a>
                </li>
                <li className="py-5">
                  <a>Contact</a>
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
