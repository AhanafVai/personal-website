import { motion } from "framer-motion";
import React, { useContext } from "react";
import { GoVerified } from "react-icons/go";
import { Element } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";
import { urlFor } from "../lib/client";

const Service = ({ serviceData }) => {
  const { toggle } = useContext(ThemeContext);
  return (
    <Element name="service" className="mt-32">
      <article>
        <h2 className="text-2xl font-bold text-center md:text-4xl lg:text-5xl">
          Service <span className="text-primary">& Skill</span>
        </h2>
        <h4 className="text-xs text-center  md:text-lg lg:text-xl">
          What I'II do for you
        </h4>
      </article>

      <div className="md:grid grid-cols-3 lg:flex gap-2">
        {serviceData.map((service) => (
          <motion.div
            whileHover={{ translateY: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={service._id}
            className={`hover:shadow-primary card w-[80%] lg:w-full md:w-[95%] ${
              toggle ? "bg-base-300" : "bg-base-100"
            } shadow-lg mx-auto my-10 `}
          >
            <figure className="avatar px-10 pt-10">
              <div className="w-8 rounded">
                <img src={urlFor(service.icon)} alt={service.name} />
              </div>
              <figcaption className="sr-only">{service.name}</figcaption>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{service.title}</h2>
              <p>{service.decs}</p>
            </div>
            <article className="text-center">
              <p className="text-sm font-semibold text-center md:text-lg">
                Tools I use
              </p>
              {service.tools.map((tool, i) => (
                <ul key={i} className=" menu-horizontal ">
                  <li className="p-5 flex items-center gap-1">
                    <GoVerified />
                    {tool}
                  </li>
                </ul>
              ))}
            </article>
          </motion.div>
        ))}
      </div>
    </Element>
  );
};

export default Service;
