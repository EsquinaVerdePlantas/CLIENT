import React, { useState } from "react";
import NavResponsive from "./NavResponsive";
import { BsSearch, BsCartFill, BsChevronDown, BsXLg } from "react-icons/bs";

const Header = () => {
  const [catOpen, setCatOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const toggleSocial = () => {
    setSocialOpen(!socialOpen);
  };
  const toggleCat = () => {
    setCatOpen(!catOpen);
  };
  const toggleSearch = () => {
    setSearch(!search);
  };

  // Search logic pending.

  return (
    <header className="bg-primary fixed top-0 min-w-full text-white z-50">
      <div className="flex justify-between items-center ml-5 mr-5 lg:justify-around">
        <div>
          <img
            className="max-w-[7.5rem] p-3"
            src="/logo1.png"
            alt="Business logo"
          />
        </div>

        {/* Navigation */}
        <section
          className={`${search ? "opacity-0 pointer-events-none" : "opacity-100"
            } hidden lg:flex items-center font-semibold text-sm`}
        >
          <nav>
            <ul className="flex gap-6">
              <li className="cursor-pointer transition-all duration-500 hover:text-white/75">
                Inicio
              </li>
              <li onClick={toggleCat} className="flex items-center gap-1 cursor-pointer transition-all duration-500 hover:text-white/75"              >
                Categorías de plantas
                <BsChevronDown
                  className={`transform ${catOpen && " rotate-180 text-secondary"
                    } transition-all`}
                />
                <ul
                  className={`${!catOpen && "hidden"
                    } bg-primary absolute top-20 p-6 border-t-2 rounded-sm border-secondary inline-grid gap-6`}
                >
                  <li className="cursor-pointer transition-all duration-500 hover:text-white/75">
                    Plantas de interior
                  </li>
                  <li className="cursor-pointer transition-all duration-500 hover:text-white/75">
                    Plantas de exterior
                  </li>
                  <li className="cursor-pointer transition-all duration-500 hover:text-white/75">
                    Plantas de decorativas
                  </li>
                </ul>
              </li>
              <li className="cursor-pointer transition-all duration-500 hover:text-white/75">
                Blog
              </li>
              <li
                onClick={toggleSocial}
                className="flex items-center gap-1 cursor-pointer transition-all duration-500 hover:text-white/75"
              >
                Redes{" "}
                <BsChevronDown
                  className={`transform ${socialOpen && " rotate-180 text-secondary"
                    } transition-all`}
                />
                <ul
                  className={`${!socialOpen && "hidden"
                    } bg-primary absolute top-20 p-6 border-t-2 rounded-sm border-secondary inline-grid gap-6`}
                >
                  <li className="cursor-pointer transition-all duration-500 hover:text-white/75">
                    Instagram
                  </li>
                  <li className="cursor-pointer transition-all duration-500 hover:text-white/75">
                    Facebook
                  </li>
                </ul>
              </li>
              <li className="cursor-pointer transition-all duration-500 hover:text-white/75">
                Whatsapp
              </li>
              <li className="flex items-center gap-1 cursor-pointer transition-all duration-500 hover:text-white/75">
                <BsCartFill className="" /> Mi Carrito
              </li>
            </ul>
          </nav>

          <button className="ml-5 bg-secondary p-3 rounded-3xl transition-all hover:px-6 hover:bg-slate-50 hover:text-black duration-700">
            Promociones
          </button>

          <span>
            <BsSearch
              onClick={toggleSearch}
              className="tranform rotate-90 ml-5 text-lg cursor-pointer"
            />
          </span>
        </section>

        {/* Input search */}
        <section
          className={`transition-opacity ${search ? "opacity-100" : "opacity-0 pointer-events-none"
            } absolute w-3/6 right-[8.4rem] top-6 inline-flex items-center`}
        >
          <input
            placeholder="Buscar..."
            className="bg-primary outline-none border-b border-b-secondary p-2 w-[94%]"
            type="text"
          />
          <BsXLg
            onClick={toggleSearch}
            className="absolute right-0 text-xl cursor-pointer"
          />
        </section>

        <NavResponsive />
      </div>
    </header>
  );
};

export default Header;
