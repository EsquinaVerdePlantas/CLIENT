import React, { useState } from "react";
import { BsSearch, BsList, BsCart, BsXLg, BsChevronDown } from "react-icons/bs";

const NavResponsive = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const toggleCat = () => {
    setCatOpen(!catOpen);
  };
  const toggleSocial = () => {
    setSocialOpen(!socialOpen);
  };
  const toggleSearch = () => {
    setSearch(!search);
  };

  return (
    <div className="lg:hidden">
      {/* Search & Burger */}
      <div className="flex">
        {/* Input transition */}
        <div
          className={`absolute inline-flex items-center gap-2 right-5 transition-opacity ${
            !search ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <input
            placeholder="Buscar..."
            type="text"
            className="bg-primary w-28 p-1 outline-none border-b border-b-secondary"
          />
          <BsXLg onClick={toggleSearch} className="text-xl " />
        </div>
        <div
          className={`flex transition-opacity ${
            search ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div onClick={toggleSearch}>
            <BsSearch className="text-2xl mt-1 mr-8 text-white transform rotate-90" />
          </div>
          <span onClick={toggleMenu}>
            <BsList className="text-3xl text-secondary " />
          </span>
        </div>
      </div>

      {/* FondoBlur */}
      <div
        className={` ${
          !openMenu && "hidden"
        } bg-gray-500/50 min-h-screen min-w-full fixed top-0 right-0 left-0 backdrop-blur-sm `}
      ></div>

      {/* Menu container */}
      <div
        className={`transition-all ${
          !openMenu ? "w-0" : "w-3/4"
        } bg-primary min-h-full fixed right-0 top-0 text-white`}
      >
        {/* Close Menu */}
        <span className="flex justify-end p-6" onClick={toggleMenu}>
          <BsXLg className="mt-3 text-2xl" />
        </span>

        {/* Navigation */}
        <nav className="bg-primary h-[30rem] flex flex-col items-center overflow-scroll mt-5">
          <ul className="flex flex-col items-center gap-10 text-lg w-full">
            <li>Inicio</li>
            <li className="flex gap-3 items-center" onClick={toggleCat}>
              Categorías{" "}
              <BsChevronDown
                className={`transform ${
                  catOpen && " rotate-180 text-secondary"
                } transition-all`}
              />
            </li>
            <ul
              className={`${
                !catOpen && "hidden"
              } flex flex-col items-center gap-7`}
            >
              <li>Plantas de interior</li>
              <li>Plantas de exterior</li>
              <li>Plantas de decorativas</li>
            </ul>
            <li>Blog</li>
            <li className="flex gap-3 items-center" onClick={toggleSocial}>
              Redes
              <BsChevronDown
                className={`transform ${
                  socialOpen && " rotate-180 text-secondary"
                } transition-all`}
              />
            </li>
            <ul
              className={`${
                !socialOpen && "hidden"
              } flex flex-col items-center gap-7`}
            >
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
            <li>Whatsapp</li>
            <li className="flex gap-2">
              <BsCart /> Mi carrito
            </li>
          </ul>
          {/* Boton de promociones */}
          <button className="mt-8 text-xl bg-secondary p-3 rounded-3xl">
            Promociones
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavResponsive;
