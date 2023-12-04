import { Link } from "react-router-dom";

const NavigationLinks = ({ closeMenu}) => {
    return (
        <div>
            {/* Row #1 */}
            <div className="text-center text-xl py-4 list hover:bg-green-900 mb-3 transition-all duration-200" onClick={closeMenu}>
                <Link to="">
                    Inicio
                </Link>
            </div>
        </div>
    );
};

export default NavigationLinks;
