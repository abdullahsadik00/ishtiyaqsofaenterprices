import React from "react";
import { navLinks } from "../constant";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import Button from "../components/Button";

const Nav = () => {
  console.log(navLinks);
  return (
    <header className="padding-x py-3 absolute z-10 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={50} height={50} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((el) => (
            <li key={el.label}>
              <a
                href={el.href}
                className="font-montserat leading-normal text-lg text-slate-gray"
              >
                {el.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <Button> Sign up</Button>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
