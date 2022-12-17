import React, { useContext, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Element } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";
import { urlFor } from "../lib/client";
import Pagination from "./Pagination";

const Portfolio = ({ projectData }) => {
  const { toggle } = useContext(ThemeContext);
  const [showFullText, setShowFullText] = useState(false);

  //? Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [projectPerPage, setProjectPerPage] = useState(3);

  //? Get currentPage Projects
  const indexOfLastProject = currentPage * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProject = projectData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  //? Change Pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Element name="portfolio" className="mt-32">
      {/* header */}
      <article>
        <h2 className="text-2xl font-bold text-center md:text-4xl lg:text-5xl">
          Portfo<span className="text-primary">lio</span>
        </h2>
        <h4 className="text-xs text-center  md:text-lg lg:text-xl">
          Most recent work
        </h4>
      </article>

      {/* projects */}
      <aside className="my-5 md:flex flex-wrap gap-2">
        {currentProject.map((project) => (
          <div key={project._id} className="py-5 w-4/5 mx-auto md:w-[32%]">
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
              } shadow-xl rounded-xl`}
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
                  <a
                    href={project.link}
                    target="_blank"
                    className={`btn btn-outline ${
                      toggle ? "btn-primary" : "btn-neutral"
                    } `}
                  >
                    {" "}
                    Launch <FaExternalLinkAlt className="pl-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Pagination
          projectPerPage={projectPerPage}
          totalProjects={projectData.length}
          paginate={paginate}
        />
      </aside>
    </Element>
  );
};

export default Portfolio;
