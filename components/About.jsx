import Image from "next/image";
import { useContext } from "react";
import { CgFileDocument } from "react-icons/cg";
import { FiFigma } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";
import { TfiServer } from "react-icons/tfi";
import { ThemeContext } from "../context/ThemeContext";
import profilePic from "../public/profilePic.jpg";

const About = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <section className="my-32">
      {/* article */}
      <article className="text-xl font-bold text-center md:text-5xl">
        <h2>
          About <span className="text-primary">Me</span>
        </h2>
      </article>

      <div className="md:my-10 md:flex justify-between items-center">
        {/* image */}
        <figure className="avatar flex justify-center my-5 md:w-2/5 ">
          <div className="w-48 rounded-xl md:w-full">
            <Image src={profilePic} alt="ahanaf" />
          </div>
        </figure>
        {/* skill card */}
        <div className="md:w-1/2 ">
          <aside className=" flex gap-5 justify-center">
            <div className=" w-28 p-5 text-center bg-base-100 shadow-lg rounded-lg  ">
              <FiFigma className=" text-xl my-1 mx-auto" />
              <article>
                <h4>Figma</h4>
                <p className="text-sm">Design</p>
              </article>
            </div>
            <div className=" w-28 p-5 text-center bg-base-100 shadow-lg rounded-lg">
              <TbBrandNextjs className=" text-xl my-1 mx-auto" />
              <h4>React</h4>
              <p className="text-sm">UI</p>
            </div>
            <div className=" w-28 p-5 text-center bg-base-100 shadow-lg rounded-lg">
              <TfiServer className=" text-xl my-1 mx-auto" />
              <h4>CMS</h4>
              <p className="text-sm">Backend</p>
            </div>
          </aside>
          <article className="p-5 space-y-10 text-justify ">
            <p className="py-2">
              A Frontend developer built with Next/React and designed by
              Scss/Tailwind. Able to create a functional and attractive digital
              environment and ensuring great user experience.
            </p>
            {toggle ? (
              <a
                href="../public/Resume.pdf"
                download
                className="btn btn-primary "
              >
                Download CV <CgFileDocument className="text-xl" />
              </a>
            ) : (
              <a
                href="../public/Resume.pdf"
                download
                className="btn  btn-neutral"
              >
                {" "}
                Download CV <CgFileDocument className="text-xl" />
              </a>
            )}
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
