import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Service from "../components/Service";
import { client } from "../lib/client";

const index = ({ aboutData, serviceData }) => {
  return (
    <>
      <Hero />
      {aboutData.map((data) => (
        <About key={data._id} data={data} />
      ))}

      <Service serviceData={serviceData} />
    </>
  );
};

export async function getServerSideProps() {
  const aboutData = await client.fetch(`*[_type == "about"]`);
  const serviceData = await client.fetch(`*[_type == "service"]`);
  return {
    props: { aboutData, serviceData },
  };
}

export default index;
