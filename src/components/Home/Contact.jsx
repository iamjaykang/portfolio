import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      name="contact"
      className="bg-white dark:bg-neutral-900 pb-32"
    >
      <div className="p-4 mx-auto max-w-screen-xl lg:p-4">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-16 text-3xl lg:text-5xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
            Contact
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:flex:row text-white dark:text-gray-500">
          <div className="lg:ml-8 flex-1">
            <h3 className="text-3xl lg:text-5xl mb-6 text-black dark:text-white font-bold">
              Get in touch!
            </h3>
            <p className="text-black dark:text-white font-bold text-xl lg:text-3xl">
              Have any questions?
              <br /> Shoot me an email
            </p>
            <p className="text-black dark:text-white lg:hidden font-bold text-xl lg:text-3xl mt-6">
              Other socials
              <div className="flex gap-4 mt-2">
                <a href="https://www.linkedin.com/in/jay-kang-b5284a228/" target="_blank">
                  <FaLinkedin size={35} />
                </a>
                <a href="https://github.com/jaykang95" target="_blank">
                  <FaGithub size={35} />
                </a>
              </div>
            </p>
          </div>
          <div className="flex-1">
            <form
              action="https://getform.io/f/5642df68-83dc-4dfe-87fb-07d12f238226"
              method="POST"
              className="flex flex-col gap-6 text-lg lg:text-2xl font-bold border-black dark:border-white border lg:p-14 p-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 rounded-sm border-black border dark:border-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 rounded-sm border-black border dark:border-white"
              />
              <textarea
                type="textfield"
                name="message"
                placeholder="Message"
                className="p-2 rounded-sm border-black border dark:border-white"
                cols={30}
                rows={8}
              />
              <button
                type="submit"
                className="bg-black dark:bg-white hover:dark:bg-neutral-900 hover:dark:border-white hover:dark:border rounded-sm py-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
