import React, { useContext } from "react";
import { FiSend } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";
import classes from "../styles/blob.module.css";

const Hero = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <section id="hero" className="md:mt-32 md:grid grid-cols-2 ">
      {/* Image */}

      <figure className={`${classes.hero__image} md:order-1 `}>
        <div className={classes.blob}></div>
        <figcaption></figcaption>
      </figure>

      {/* Article */}
      <article className="w-3/4 mx-auto my-10 space-y-5 md:w-11/12  ">
        <h1 className="text-3xl font-bold md:text-4xl">Ahanaf Abdullah</h1>
        <h4 className="font-semibold md:text-xl"># Frontend Developer</h4>
        <p className="">
          I'm interested in UI/UX and I love to create beautiful and performant
          products with delightful user experiences.
        </p>

        <a
          href="mailto:ahanafabdullah9@gmail.com"
          className={`btn ${toggle ? "btn-primary" : "btn-neutral"}`}
        >
          {" "}
          Say Hello{"  "}
          <FiSend className="text-2xl" />
        </a>
      </article>
    </section>
  );
};

export default Hero;
