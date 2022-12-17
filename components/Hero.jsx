import React, { useContext } from "react";
import { FiSend } from "react-icons/fi";
import { Element } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";
import classes from "../styles/blob.module.css";

const Hero = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <Element name="hero" className="md:mt-32 md:grid grid-cols-2 ">
      {/* Image */}

      <figure className={`${classes.hero__image} md:order-1 `}>
        <div className={classes.blob}></div>
        <figcaption className="sr-only">Image of Ahanaf Abdullah</figcaption>
      </figure>

      {/* Article */}
      <article className="w-3/4 mx-auto my-10 space-y-5 md:w-11/12  ">
        <h1 className="text-3xl font-bold md:text-4xl">Ahanaf Abdullah</h1>
        <h4 className="font-semibold md:text-xl"># React/Next Developer</h4>
        <p>
          I'm a frontend developer strongly focused on user
          experience,specialized in Javascript libraries like React/Next.
        </p>

        <a
          href="mailto:ahanafabdullah9@gmail.com"
          className={`btn ${toggle ? "btn-primary" : "btn-neutral"} `}
        >
          {" "}
          Say Hello{"  "}
          <FiSend className="text-2xl pl-1" />
        </a>
      </article>
    </Element>
  );
};

export default Hero;
