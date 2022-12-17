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
    "https://cdn.sanity.io/files/k29ugrfd/production/26675e3c307193717a7b291b18cacc05fd506286.pdf";

  return (
    <Element name="about" className=" mt-32">
      <article>
        <h2 className="text-2xl font-bold text-center md:text-4xl lg:text-5xl">
          About <span className="text-primary">Me</span>
        </h2>
        <h4 className="text-xs text-center  md:text-lg lg:text-xl">
          My Introduction
        </h4>
      </article>

      <div className="md:my-10 md:flex justify-between  items-center">
        {/* image */}
        <figure className="avatar flex justify-center my-5 md:w-[45%] lg:w-2/5">
          <div className="w-48 rounded-xl md:w-full">
            <img src={urlFor(data.image)} />
          </div>
          <figcaption className="sr-only">React/Next Developer</figcaption>
        </figure>
        {/* skill card */}
        <div className="md:w-[50%] lg:w-1/2">
          <aside className="grid grid-cols-3 mx-auto gap-3 w-4/5 md:w-full ">
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
          <article className="py-5 text-justify mx-auto w-[80%] md:w-full md:text-sm md:space-y-3 lg:space-y-10 lg:text-lg">
            <p className="py-2">{data.desc}</p>

            <a
              href={pdf}
              download
              className={`btn ${
                toggle ? "btn-primary" : "btn-neutral"
              } md:text-lg lg:text-xl`}
            >
              Download CV{" "}
              <CgFileDocument className="lg:text-xl md:text-base " />
            </a>
          </article>
        </div>
      </div>
    </Element>
  );
};

export default About;
