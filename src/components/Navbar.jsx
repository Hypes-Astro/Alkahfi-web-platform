const Navbar = () => {
    return(
        <div className="navbar sticky top-0 z-20 bg-white shadow-md">
            <div className="navbar-start">
                <a className="w-auto p-2 ml-3 hover:text-blue-500 text-xl" href="/">Al Kahfi</a>
            </div>
            
            <div className="navbar-end">
                <a className="btn">Charity</a>
            </div>
        </div>
    );
}

export default Navbar;