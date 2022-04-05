import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shope", link: "/shope" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="bg-indigo-600 text-white justify-center">
      <div
        onClick={() => setOpen(!open)}
        className="w-6 h-6 md:hidden justify-center"
      >
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={` justify-center text-center p-1 md:flex text-xl font-semibold bg-indigo-600 text-white w-full absolute md:static duration-500 ease-in ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
