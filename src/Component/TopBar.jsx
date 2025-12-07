import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation(); // get current path

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "product", path: "/product" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="overflow-x-hidden text-center">
      <Navbar
        fluid
        rounded
        theme={{
          root: {
            base: "bg-white dark:bg-black border-none shadow-none px-4 py-4",
          },
          link: {
            base: "block py-2 pl-3 pr-4 md:p-0 relative transition-all duration-300",
            active: {
              on:
                "text-purple-600 font-semibold " +
                "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full " +
                "after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:rounded-full",
              off:
                "text-gray-700 " +
                "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500",
            },
          },
        }}
      >
        <NavbarBrand as={Link} to="/">
          <span id="name" className="font-montserrat text-xl sm:text-3xl dark:text-gray-300">
            M.K.
          </span>
        </NavbarBrand>

        <NavbarToggle />
        <NavbarCollapse className="  h-screen" >
          {links.map((link) => (
            <NavbarLink
              key={link.name}
              as={Link}
              to={link.path}
              active={location.pathname === link.path} // ✅ active based on current route
            >
              {link.name}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default TopBar;
