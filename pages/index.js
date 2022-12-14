import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Service from "../components/Service";
import { client } from "../lib/client";

const index = ({ aboutData }) => {
  console.log(aboutData);
  return (
    <>
      <Hero />
      {aboutData.map((data) => (
        <About key={data._id} data={data} />
      ))}
      <Service />
    </>
  );
};

export async function getServerSideProps() {
  const aboutData = await client.fetch(`*[_type == "about"]`);
  return {
    props: { aboutData },
  };
}

export default index;
