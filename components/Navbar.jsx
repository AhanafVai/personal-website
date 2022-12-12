import React from "react";
import { AiOutlineAppstoreAdd, AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral px-5 lg:px-20 ">
      <div className="flex-1 lg:flex-none">
        <a className="text-lg font-bold">Ahanaf</a>
      </div>
      <div className="flex justify-end flex-1  ">
        <div className="flex items-stretch">
          {/* view on large */}
          <ul className=" menu menu-horizontal bg-neutral  hidden sm:flex">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <label className="swap swap-rotate">
                <input type="checkbox" />
                <div className="swap-on fill-current w-5 h-5">
                  <ImSun />
                </div>

                <div className="swap-off fill-current w-5 h-5">
                  <BsFillMoonStarsFill />
                </div>
              </label>
            </li>
          </ul>

          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="sm:hidden text-2xl">
            <AiOutlineAppstoreAdd />
          </label>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label
            htmlFor="my-modal-4"
            className="modal modal-bottom sm:modal-middle cursor-pointer"
          >
            <label className="modal-box relative">
              <div className="flex justify-between">
                <label htmlFor="my-modal-4" className=" text-2xl">
                  <AiOutlineClose />
                </label>
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <div className="swap-on fill-current w-5 h-5">
                    <ImSun />
                  </div>

                  <div className="swap-off fill-current w-5 h-5">
                    <BsFillMoonStarsFill />
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
    </div>
  );
};

export default Navbar;
