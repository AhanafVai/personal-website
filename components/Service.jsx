import React from "react";
import { GoVerified } from "react-icons/go";
import { urlFor } from "../lib/client";

const Service = ({ serviceData }) => {
  return (
    <section>
      <article className="text-xl font-bold text-center md:text-5xl">
        <h2>
          Service <span className="text-primary">& Skill</span>
        </h2>
      </article>
      <div className="md:flex gap-2">
        {serviceData.map((service) => (
          <div
            key={service._id}
            className="hover:animate-bounce card w-4/5 bg-base-100 shadow-lg mx-auto my-10 "
          >
            <figure className="avatar px-10 pt-10 ">
              <div className="w-8 rounded">
                <img src={urlFor(service.icon)} alt="code" />
              </div>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
