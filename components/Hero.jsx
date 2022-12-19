import React, { useContext } from "react";
import { FiSend } from "react-icons/fi";
import { Element } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";
import classes from "../styles/blob.module.css";

const Hero = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <Element name="hero" className="mt-14 md:mt-32 md:flex justify-between">
      {/* Image */}
      <figure className={`${classes.hero__image} md:order-1`}>
        <div className={classes.blob}></div>
        <figcaption className="sr-only">Image of Ahanaf Abdullah</figcaption>
      </figure>
      {/* Article */}
      <article className="w-3/4 mx-auto my-10 space-y-5">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Ahanaf Abdullah
        </h1>
        <h4 className="font-semibold text-lg md:text-xl lg:text-2xl">
          # React/Next Developer
        </h4>
        <p className="md:w-[90%] lg:w-[80%] md:text-lg lg:text-xl">
          I'm a frontend developer strongly focused on user
          experience,specialized in Javascript libraries like React/Next.
        </p>

        <a
          href="mailto:ahanafabdullah9@gmail.com"
          className={`btn ${toggle ? "btn-primary" : "btn-neutral"} lg:btn-lg`}
        >
          {" "}
          Say Hello{"  "}
          <FiSend className="text-xl pl-1 lg:text-2xl" />
        </a>
      </article>
    </Element>
  );
};

export default Hero;
