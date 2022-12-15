import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { urlFor } from "../lib/client";

const Portfolio = ({ projectData }) => {
  const { toggle } = useContext(ThemeContext);

  const [showFullText, setShowFullText] = useState(false);

  return (
    <section className="mt-32">
      {/* header */}
      <article>
        <h2 className="text-2xl font-bold text-center md:text-5xl">
          Portfo<span className="text-primary">lio</span>
        </h2>
        <h4 className="text-xs text-center  md:text-xl ">Most recent work</h4>
      </article>
      {/* projects */}

      <aside className="my-5 md:flex gap-2">
        {projectData.map((project) => (
          <div key={project._id} className="py-5 w-4/5 mx-auto md:w-[30%]">
            {/* image */}
            <figure className="avatar ">
              <div className=" rounded-xl ">
                <img src={urlFor(project.image)} alt={project.name} />
              </div>
            </figure>
            {/* card */}
            <div
              className={`card mt-5 ${
                toggle ? "bg-base-300" : "bg-base-100"
              } shadow-2xl rounded-xl`}
            >
              <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>
                  {showFullText
                    ? `${project.desc}`
                    : `${project.desc}`.substring(0, 20)}
                  {showFullText ? (
                    <button onClick={() => setShowFullText(false)}>
                      <span className="text-secondary pl-1">read less</span>
                    </button>
                  ) : (
                    <button onClick={() => setShowFullText(true)}>
                      {" "}
                      <span className="text-secondary pl-1">read more...</span>
                    </button>
                  )}
                </p>
                <div>
                  {toggle ? (
                    <a
                      href={project.link}
                      target="_blank"
                      className="btn btn-outline btn-primary "
                    >
                      Launch
                    </a>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      className="btn btn-outline  btn-neutral"
                    >
                      {" "}
                      Launch
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default Portfolio;
