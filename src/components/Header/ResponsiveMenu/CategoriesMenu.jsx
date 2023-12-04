const CategoriesMenu = ({ openCatg }) => {
    return (
        <div className={`text-center py-4 bg-primary transition-opacity ${!openCatg && "hidden"}`}>
            <ul>
                <li className="mb-3">Plantas de interior</li>
                <li className="mb-3">Plantas de exterior</li>
                <li className="mb-3">Plantas decorativas</li>
            </ul>
        </div>
    );
};

export default CategoriesMenu;
