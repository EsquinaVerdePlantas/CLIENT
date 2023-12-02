import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openCatg, setOpenCatg] = useState(false);

    return (
        <div className="text-white bg-primary font-title fixed top-0 left-0 right-0 h-15 shadow-md py-4 z-[99]">
            <div className="flex content-center justify-between px-10 pt-1">
                <h1>FABILOGO</h1>

                {/* BOTONES LATERALES */}
                <section className="">
                    <button onClick={() => setOpenSearch(!openSearch)} className="first: mr-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>

                    <button onClick={() => setOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </section>
            </div>

            {/* SEARCH */}
            <div className={`fixed bg-white/95 top-[3.9rem] min-w-full text-gray-500 transition-opacity duration-100 ${openSearch ? 'opacity-100' : 'opacity-0 pointer-events-none'} shadow-md`}>
                <div className="mx-10 mt-1 mb-4 text-center">
                    <input type="text" placeholder="Buscar las Chikiplantas" className="border-b-2 bg-transparent border-primary min-w-full mt-1 mb-3 outline-none p-2" />

                    <div className="leading-10 mx-2 text-left">
                        <h1 className="">RESULTADOS</h1>
                        <h1 className="">RESULTADOS</h1>
                        <h1 className="">RESULTADOS</h1>
                    </div>
                </div>
            </div>

            {/* FONDO BLUR */}
            <div className={`${!open && "hidden"} bg-gray-500/50 min-h-screen w-full fixed top-0 right-0 left-0 backdrop-blur-sm`}></div>

            {/* MENÚ RESPONSIVE */}
            <div className={`${open ? "w-3/4" : "w-0"} transition-all duration-300 bg-primary min-h-screen  fixed top-0 right-0 shadow-md  py-4`} >
                <div className="text-end">
                    <button className="mr-5 mb-7" onClick={() => setOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="text-center text-xl py-4 list hover:bg-green-900 mb-3 transition-all duration-200">
                        <Link to="">
                            Inicio
                        </Link>
                    </div>

                    <div className="flex justify-center gap-4 text-xl py-4 list hover:bg-green-900 mb-3 transition-all duration-200" onClick={() => setOpenCatg(!openCatg)}>
                        <h3 className="overflow-hidden">
                            Categorías
                        </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                    {/* MENÚ CATEGORIAS */}
                    <div className={`text-center py-4 bg-primary transition-opacity ${!openCatg && "hidden"}`} >
                        <ul>
                            <li className="mb-3">Plantas de interior</li>
                            <li className="mb-3">Plantas de exterior</li>
                            <li className="mb-3">Plantas decorativas</li>
                        </ul>
                    </div>

                    <div className="flex justify-center py-4 gap-4  hover:bg-green-900 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <h1 className="text-xl overflow-hidden">
                            Mi Carrito
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;