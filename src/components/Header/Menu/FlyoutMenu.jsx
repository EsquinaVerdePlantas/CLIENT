import { Link } from "react-router-dom";

const FlyoutMenu = ({ title, optionsArray, state, toggleCategories }) => {
    return (
        <div className="flex content-center justify-center cursor-pointer">
            <div onClick={toggleCategories} className="flex gap-1">
                <h1 className="hover:text-white/75 transition-all duration-200">{title}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`text-[#00ff22] md:w-4 transform ${state ? 'rotate-180' : 'rotate-0'} duration-100`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

            {state && (
                <div className={`overflow-hidden bg-primary px-4 rounded-b-3xl text-center shadow-md absolute top-[4rem] transition-all ease-in-out duration-400`} >
                    <nav className="flex flex-col items-center justify-center rounded-3xl">
                        {optionsArray?.map((option, index)=>
                            <Link key={index} to="" className="mt-4 hover:text-white/75 transition-all duration-700 last:pb-5 box-border">
                                {option}
                            </Link>
                        )}
                    </nav>
                </div>
            )}
        </div>
    )
}

export default FlyoutMenu;