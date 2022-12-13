import React, { useContext } from "react";
import { FiSend } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";
import classes from "../styles/blob.module.css";

const Hero = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <section className="sm:flex">
      {/* Image */}
      <figure className={classes.hero__image}>
        <div className={classes.blob}></div>
        <figcaption></figcaption>
      </figure>
      {/* Article */}
      <article className="py-10 space-y-5">
        <h1 className="text-4xl font-bold">Ahanaf Abdullah</h1>
        <h4 className="font-semibold"># Frontend Developer</h4>
        <p className="">
          I'm interested in UI/UX and I love to create beautiful and performant
          products with delightful user experiences.
        </p>
        {toggle ? (
          <a
            href="mailto:ahanafabdullah9@gmail.com"
            className="btn btn-primary "
          >
            Say Hello
            <FiSend className="text-2xl" />
          </a>
        ) : (
          <a
            href="mailto:ahanafabdullah9@gmail.com"
            className="btn  btn-neutral"
          >
            {" "}
            Say Hello{"  "}
            <FiSend className="text-2xl" />
          </a>
        )}
      </article>
    </section>
  );
};

export default Hero;
