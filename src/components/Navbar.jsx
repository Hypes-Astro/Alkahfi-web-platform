const Navbar = () => {
    return(
        <div className="navbar sticky top-0 z-20 bg-white shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    
                </div>
                <a className="w-auto p-2 ml-3 hover:text-blue-500 text-xl" href="/">Al Kahfi</a>
            </div>
            
            <div className="navbar-end">
                <a className="btn">Charity</a>
            </div>
        </div>
    );
}

export default Navbar;