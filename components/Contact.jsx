import { useForm, ValidationError } from "@formspree/react";
import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { RiMailSendLine, RiMessengerLine } from "react-icons/ri";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkozaqw");
  if (state.succeeded) {
    setTimeout(function () {
      window.location.reload();
    }, 5000);
    return (
      <p className="py-20 text-center text-4xl">
        👋 Message sent! Thanks for getting in touch
      </p>
    );
  }
  const { toggle } = useContext(ThemeContext);
  return (
    <section id="contact" className="mt-32">
      <article>
        <h2 className="text-2xl font-bold text-center md:text-5xl">
          Cont<span className="text-primary">act</span>
        </h2>
        <h4 className="text-xs text-center  md:text-xl ">Get in touch</h4>
      </article>

      <div className=" md:grid grid-cols-2 md:mt-20">
        <aside className="my-5">
          <h4 className="text-sm text-center font-semibold  md:text-xl ">
            Talk to me
          </h4>

          {/* card 1*/}
          <a
            href="mailto:ahanafabdullah9@gmail.com"
            className={`card w-4/5 ${
              toggle ? "bg-base-300" : "bg-base-100"
            } shadow-xl mx-auto my-10 md:w-full md:my-5`}
          >
            <figure className=" pt-10 md:pt-5">
              <RiMailSendLine className="text-4xl" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">Email</h2>
              <p>ahanafabdullah9@gmail.com</p>
            </div>
            <p className=" flex justify-center items-center gap-2 mb-5">
              Write me an email
              <AiOutlineArrowRight />
            </p>
          </a>

          {/* card 2*/}
          <a
            href="https://wa.me/01516758149"
            target="_blank"
            className={`card w-4/5 ${
              toggle ? "bg-base-300" : "bg-base-100"
            } shadow-xl mx-auto my-10 md:w-full md:my-5`}
          >
            <figure className=" pt-10 md:pt-5">
              <FaWhatsapp className="text-4xl" />
            </figure>
            <div className="card-body items-center ">
              <h2 className="card-title">Whatsapp</h2>
              <p>01516758149</p>
            </div>
            <p className=" flex justify-center items-center gap-2 mb-5">
              Write me on whatsapp
              <AiOutlineArrowRight />
            </p>
          </a>

          {/* card 3*/}
          <a
            href="https://m.me/ahanafabdullah"
            target="_blank"
            className={`card w-4/5 ${
              toggle ? "bg-base-300" : "bg-base-100"
            } shadow-xl mx-auto my-10 md:w-full md:my-5`}
          >
            <figure className=" pt-10 md:pt-5">
              <RiMessengerLine className="text-4xl" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">Messenger</h2>
              <p>ahanafabdullah</p>
            </div>
            <p className=" flex justify-center items-center gap-2 mb-5">
              Write me on messenger
              <AiOutlineArrowRight />
            </p>
          </a>
        </aside>
        <aside className="my-5">
          <h4 className="text-sm text-center font-semibold  md:text-xl ">
            Share your project
          </h4>
          {/* form */}
          <form
            onSubmit={handleSubmit}
            className=" my-10 form-control space-y-5 w-4/5 mx-auto md:my-5 md:space-y-10"
          >
            <input
              id="name"
              type="text"
              name="name"
              className="input input-bordered md:h-20 placeholder:md:text-xl"
              placeholder="User*"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              id="email"
              type="email"
              name="email"
              className="input input-bordered md:h-20 placeholder:md:text-xl"
              placeholder="Email*"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              className="textarea textarea-bordered h-40 md:h-60 placeholder:md:text-xl"
              placeholder="Project description*
              "
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className={`btn ${
                toggle ? "btn-primary" : "btn-neutral"
              } md:h-20 md:text-xl`}
            >
              {" "}
              Say Hello{"  "}
              <FiSend className="text-2xl" />
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
