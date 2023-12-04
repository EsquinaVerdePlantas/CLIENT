import { useState } from "react";
import SearchBar from "./SearchBar";
import IconSearch from "../../assets/IconSearch";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";
import IconBurgerMenu from "../../assets/IconBurgerMenu";
import NavigationHeader from "./Menu/NavigationHeader";


const Header = () => {
    const [open, setOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openCatg, setOpenCatg] = useState(false);
    const [openSocial, setOpenSocial] = useState(false)

    const toggleMenu = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
        setOpenCatg(false);
    };

    const closeSearch = () => {
        setOpenSearch(false)
    }

    const toggleCategories = () => {
        setOpenCatg(!openCatg);
    };

    const toggleSocial = () => {
        setOpenSocial(!openSocial)
    }

    return (
        <div className="md:items-center text-white bg-primary font-title fixed top-0 left-0 right-0 h-16 shadow-md py-4 z-[99] lg:h-20">
            <div className="flex items-center content-center justify-between md:px-20 sm: px-6 lg:px-24">
                <h1 className="items-center">FABILOGO</h1>

                {/* Navbar Desktop*/}
                <section className="flex">
                    <NavigationHeader
                        openCatg={openCatg}
                        openSocial={openSocial}
                        toggleCategories={toggleCategories}
                        toggleSocial={toggleSocial}
                    />

                    <button onClick={() => setOpenSearch(!openSearch)} className="m-0 sm: mr-6 md:mr-6 lg:ml-8">
                        <IconSearch />
                    </button>

                    <button className="lg:hidden" onClick={toggleMenu}>
                        <IconBurgerMenu />
                    </button>
                </section>
            </div>

            {/* Barra de Búsqueda */}
            <SearchBar openSearch={openSearch} closeSearch={closeSearch} />

            {/* Fondo Blur */}
            <div onClick={closeMenu} className={`${!open && "hidden"} bg-gray-500/50 min-h-screen w-full fixed top-0 right-0 left-0 backdrop-blur-sm`}></div>

            {/* Menú Responsive */}
            <ResponsiveMenu open={open} closeMenu={closeMenu} toggleCategories={toggleCategories} openCatg={openCatg} />
        </div>
    );
};

export default Header;
