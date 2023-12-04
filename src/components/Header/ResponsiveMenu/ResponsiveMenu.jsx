import IconCloseMenu from "../../../assets/IconCloseMenu";
import { Link } from "react-router-dom"

const ResponsiveMenu = ({ open, closeMenu, toggleCategories, openCatg }) => {
    return (
        <div className={`cursor-pointer sm: overflow-hidden md:overflow-hidden transition-all duration-300 bg-primary min-h-screen fixed top-0 right-0 shadow-md py-4 ${open ? "w-3/4" : "w-0"} lg:hidden`} >
            <div className="text-end px-5">

                <button className="mr-5 mb-7" onClick={closeMenu}>
                    <IconCloseMenu />
                </button>

                {/* Enlaces de Navegación */}
                <div className="text-center text-xl py-4 list hover:bg-green-900 mb-3 transition-all duration-200" onClick={closeMenu}>
                    <Link to="">
                        Inicio
                    </Link>
                </div>

                {/* Menú Categorías */}
                <div className="flex justify-center gap-4 text-xl py-4 list hover:bg-green-900 mb-3 transition-all duration-200" onClick={toggleCategories}>
                    <h3>
                        Categorías
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 transform ${openCatg ? 'rotate-180' : 'rotate-0'} duration-100`}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

                {openCatg && (
                    <div className="text-center py-4 bg-primary transition-opacity">
                        <ul>
                            <li className="mb-3">Plantas de interior</li>
                            <li className="mb-3">Plantas de exterior</li>
                            <li className="mb-3">Plantas decorativas</li>
                        </ul>
                    </div>
                )}

                <div className="flex justify-center gap-4 text-xl py-4 list hover:bg-green-900 mb-3 transition-all duration-200" onClick={closeMenu}>
                    <Link to="">
                        <h3>
                            Mi Carrito
                        </h3>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
