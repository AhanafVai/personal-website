import React from "react"
import { motion } from "framer-motion";
import { useContext } from "react";
import { CgFileDocument } from "react-icons/cg";
import { FiFigma } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";
import { TfiServer } from "react-icons/tfi";
import { Element } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";
import { urlFor } from "../lib/client";


const About = ({ data }) => {
  const { toggle } = useContext(ThemeContext);

  const pdf =
    "https://drive.google.com/file/d/1b1WuPL4vadFxpAvf860rSCzu10Uj-gis/view?usp=share_link";

  return (
    <Element name="about" className=" mt-32">
      {/* article */}
      <article>
        <h2 className="font-bold text-center text-2xl md:text-4xl lg:text-5xl">
          About <span className="text-primary">Me</span>
        </h2>
        <h4 className="text-xs text-center  md:text-lg lg:text-xl">
          My Introduction
        </h4>
      </article>
      {/* Image ,card & article container */}
      <div className="md:my-10 md:flex justify-between  items-center">
        {/* image */}
        <figure className="avatar my-5 md:w-[48%] lg:w-[40%]">
          <div className="w-[80%] mx-auto rounded-xl md:w-full">
            <img src={urlFor(data.image)} />
          </div>
          <figcaption className="sr-only">React/Next Developer</figcaption>
        </figure>
        {/* skill card, article container */}
        <div className="space-y-5 md:w-[45%] lg:w-[50%]">
          <aside className="mx-auto grid grid-cols-3 gap-3 w-4/5 md:w-full ">
            {/* skill card 1 */}
            <motion.div
              whileHover={{ translateY: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`p-5 text-center bg-base-100 shadow-lg rounded-lg ${
                toggle ? "bg-base-300" : "bg-base-100"
              }`}
            >
              <figure>
                <FiFigma className="text-xl my-1 mx-auto " />
                <figcaption className="sr-only">Figma Icon</figcaption>
              </figure>
              <article>
                <h4>Figma</h4>
                <p className="text-sm">Design</p>
              </article>
            </motion.div>
            {/* skill card 2 */}
            <motion.div
              whileHover={{ translateY: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`p-5 text-center bg-base-100 shadow-lg rounded-lg ${
                toggle ? "bg-base-300" : "bg-base-100"
              }`}
            >
              <figure>
                <TbBrandNextjs className="text-xl my-1 mx-auto" />
                <figcaption className="sr-only">Next.js Icon</figcaption>
              </figure>
              <article>
                <h4>React</h4>
                <p className="text-sm">UI</p>
              </article>
            </motion.div>
            {/* skill card 3 */}
            <motion.div
              whileHover={{ translateY: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`p-5 text-center bg-base-100 shadow-lg rounded-lg ${
                toggle ? "bg-base-300" : "bg-base-100"
              }`}
            >
              <figure>
                <TfiServer className=" text-xl my-1 mx-auto" />
                <figcaption className="sr-only">CMS Icon</figcaption>
              </figure>
              <h4>CMS</h4>
              <p className="text-sm">Backend</p>
            </motion.div>
          </aside>
          <article className="text-justify mx-auto w-[80%] md:w-full lg:text-xl">
            <p>{data.desc}</p>
          </article>
            <a href={pdf}
            target="_blank"
            download
             className={`m-10 btn ${
               toggle ? "btn-primary" : "btn-neutral"
             } md:m-0 lg:btn-lg`}
            > Download CV <CgFileDocument /></a>
         
        </div>
      </div>
    </Element>
  );
};

export default About;
