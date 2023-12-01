import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsTiktok } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer class="bg-primary">
                <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
                    <div class="flex justify-center">
                        <img
                            class="w-3/12"
                            src="/logo1.png"
                            alt="Business logo"
                        />
                    </div>
                    <p
                        class="mx-auto mt-4 max-w-md text-center text-white font-sans text-sm sm:text-base tracking-wide"
                    >
                        Estamos aquí para ayudarlo a darle vida a sus espacios.
                        ¡Síguenos en nuestras redes sociales para más consejos y novedades verdes!
                    </p>
                    <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <Link
                                class="text-white transition hover:text-white/75"
                                to="/"
                            >
                                CONTACTO
                            </Link>
                        </li>

                        <li>
                            <Link
                                class="text-white transition hover:text-white/75"
                                to="/"
                            >
                                CATEGORÍAS
                            </Link>
                        </li>

                        <li>
                            <Link
                                class="text-white transition hover:text-white/75"
                                to="/"
                            >
                                MI CARRITO
                            </Link>
                        </li>

                        <li>
                            <Link
                                class="text-white transition hover:text-white/75"
                                to="/"
                            >
                                BLOG
                            </Link>
                        </li>

                        <li>
                            <Link
                                class="text-white transition hover:text-white/75"
                                to="/"
                            >
                                AGREGAR
                            </Link>
                        </li>

                        <li>
                            <Link
                                class="text-white transition hover:text-white/75"
                                to="/"
                            >
                                AGREGAR
                            </Link>
                        </li>
                    </ul>

                    <ul class="mt-12 flex justify-center gap-6 md:gap-8">
                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        >
                            <BsFacebook />
                        </a>
                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        >
                            <BsInstagram />
                        </a>

                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        >
                            <BsTwitter />
                        </a>

                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        >
                            <BsYoutube />
                        </a>

                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        >
                            <BsTiktok />
                        </a>
                    </ul>

                    <p class="mx-auto mt-12 max-w-md text-center text-white font-sans text-sm tracking-wide"
                    >
                        Copyright © Esquina Verde 2023 All rights reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;