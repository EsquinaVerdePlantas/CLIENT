const SearchBar = ({ openSearch, closeSearch }) => {
    return (
        <div className={`fixed rounded-b-3xl bg-white/95 top-[3.9rem] min-w-full text-gray-500 transition-opacity duration-100 ${openSearch ? 'opacity-100' : 'opacity-0 pointer-events-none'} shadow-md lg:top-[5em]`}>
            <div className="mx-10 mt-1 mb-4 text-center">
                <input type="text" placeholder="Buscar las Chikiplantas" className="border-b-2 bg-transparent border-primary min-w-full mt-1 mb-3 outline-none p-2" />

                <div onClick={closeSearch} className="leading-10 mx-2 text-left">
                    <h1 className="">RESULTADOS</h1>
                    <h1 className="">RESULTADOS</h1>
                    <h1 className="">RESULTADOS</h1>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;