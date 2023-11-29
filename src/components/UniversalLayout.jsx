import { Outlet } from "react-router-dom"
import Footer from './Footer';
import Navbar from "./Navbar";


const UniversalLayout = () => {
    return (
        <main data-theme="light" className="min-h-screen">
            <Navbar/>
            <div className="mx-6">
                <Outlet />
            </div>
            <Footer/>
        </main>
    )
}

export default UniversalLayout