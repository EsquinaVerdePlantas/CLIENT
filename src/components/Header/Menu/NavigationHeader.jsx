import { Link } from "react-router-dom"
import FlyoutMenu from "./FlyoutMenu"

const NavigationHeader = ({ openCatg, openSocial, toggleCategories, toggleSocial }) => {
    return (
        <div className="lg:flex items-center gap-6 md:hidden sm: hidden">
            <Link className="hover:text-white/75 transition-all duration-700" to="">
                Inicio
            </Link>

            <FlyoutMenu
                title="Categorías de plantas"
                optionsArray={[
                    "Plantas de interior",
                    "Plantas de exterior",
                    "Plantas decorativas",
                ]}
                state={openCatg}
                toggleCategories={toggleCategories}
            />

            <Link className="hover:text-white/75 transition-all duration-700" to="">
                Blog
            </Link>

            <FlyoutMenu
                title="Redes"
                optionsArray={[
                    "Facebook",
                    "Instagram",
                    "X",
                ]}
                state={openSocial}
                toggleCategories={toggleSocial}
            />

            <Link className="hover:text-white/75 transition-all duration-700" to="">
                Whatsapp
            </Link>

            <Link className="hover:text-white/75 transition-all duration-700" to="">
                Mi carrito
            </Link>

            <Link className="ml-3 bg-[#088908] p-3 px-4 rounded-3xl transition-all hover:px-6 hover:bg-white hover:text-black duration-700 " to="">
                Promociones
            </Link>
        </div>
    )
}

export default NavigationHeader;