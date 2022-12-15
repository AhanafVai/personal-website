import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Service from "../components/Service";
import { client } from "../lib/client";

const index = ({ aboutData, serviceData, projectData }) => {
  return (
    <>
      <Hero />
      {aboutData.map((data) => (
        <About key={data._id} data={data} />
      ))}
      <Service serviceData={serviceData} />
      <Portfolio projectData={projectData} />
    </>
  );
};

export async function getServerSideProps() {
  const aboutData = await client.fetch(`*[_type == "about"]`);
  const serviceData = await client.fetch(`*[_type == "service"]`);
  const projectData = await client.fetch(`*[_type == "portfolio"]`);
  return {
    props: { aboutData, serviceData, projectData },
  };
}

export default index;
