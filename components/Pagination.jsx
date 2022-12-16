import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Pagination = ({ projectPerPage, totalProjects, paginate }) => {
  const { toggle } = useContext(ThemeContext);
  const pageNumbers = [];

  //? Getting correct amount of page numbers
  for (let i = 1; i <= Math.ceil(totalProjects / projectPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="my-5 md:mx-auto" aria-label="Page navigation example">
      <div className="space-x-5 text-center">
        {pageNumbers.map((number) => (
          <a
            key={number}
            onClick={() => paginate(number)}
            className={`btn ${toggle ? "btn-primary" : "btn-neutral"} `}
          >
            {number}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
