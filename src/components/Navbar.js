import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Ihsan Naufal</h1>
                <div>
                    <a href="#about" className="text-gray-400 hover:text-white mx-4 transition duration-200">About</a>
                    <a href="#projects" className="text-gray-400 hover:text-white mx-4 transition duration-200">Projects</a>
                    <a href="#contact" className="text-gray-400 hover:text-white mx-4 transition duration-200">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;