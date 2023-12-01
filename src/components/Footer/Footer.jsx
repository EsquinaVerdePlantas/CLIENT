import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsTiktok } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer class="bg-primary">
                <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
                    <div class="flex justify-center">
                        <img class="w-3/12" src="/logo1.png" alt="Business logo" />
                    </div>
                    <p class="mx-auto mt-4 max-w-md text-center text-white font-sans text-sm sm:text-base tracking-wide">
                        Estamos aquí para ayudarlo a darle vida a sus espacios. ¡Síguenos en nuestras redes sociales para más consejos y novedades verdes!
                    </p>
                    <div class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <Link class="text-white transition hover:text-white/75 font-title" to="/" >Contacto</Link>
                        <Link class="text-white transition hover:text-white/75 font-title" to="/" >Categorías</Link>
                        <Link class="text-white transition hover:text-white/75 font-title" to="/">Mi carrito</Link>
                        <Link class="text-white transition hover:text-white/75 font-title" to="/">Blog</Link>
                        <Link class="text-white transition hover:text-white/75 font-title" to="/">Agregar</Link>
                        <Link class="text-white transition hover:text-white/75 font-title" to="/">Agregar</Link>
                    </div>

                    <div class="mt-12 flex justify-center gap-6 md:gap-8">
                        <a href="/" rel="noreferrer" target="_blank" class="text-secondary transition hover:text-secondary/75 text-2xl"><BsFacebook /></a>
                        <a href="/" rel="noreferrer" target="_blank" class="text-secondary transition hover:text-secondary/75 text-2xl"><BsInstagram /></a>
                        <a href="/" rel="noreferrer" target="_blank" class="text-secondary transition hover:text-secondary/75 text-2xl"><BsTwitter /></a>
                        <a href="/" rel="noreferrer" target="_blank" class="text-secondary transition hover:text-secondary/75 text-2xl"><BsYoutube /></a>
                        <a href="/" rel="noreferrer" target="_blank" class="text-secondary transition hover:text-secondary/75 text-2xl"><BsTiktok /></a>
                    </div>

                    
                </div>
            </footer>
        </>
    )
}

export default Footer;