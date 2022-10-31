import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-neutral-900">
      <span className="text-md text-gray-500 mx-auto sm:text-center dark:text-gray-400 font-bold">
        © 2022{" "}
        <a href="/" className="hover:underline">
          Jay Kang
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
