import React from "react";

const navigation = [
  { name: "Services", href: "#service-div" },
  { name: "Projects", href: "#project-div" },
  { name: "Contact Us", href: "#contact-us-div" },
];

function Footer() {
  return (
    <footer className="p-4 w-full bg-white md:rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-gray-500 sm:text-center ">
        © 2022{" "}
        <a href="#" className="hover:underline">
          Set Studios
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
        {navigation.map((n, index) => (
          <li key={index}>
            <a href={n.href} className="mr-4 hover:underline md:mr-6 ">
              {n.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
