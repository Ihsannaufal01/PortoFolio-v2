import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-4"> &copy; {new Date().getFullYear()} Ihsan Naufal. </p>
            </div>
            <div class="space-x-1">
        <a href="https://github.com/Ihsannaufal01" class="text-gray-500 hover:text-gray-900"><i class="fab fa-github"></i> GitHub •</a>
        <a href="https://instagram.com/noparusensei" class="text-gray-500 hover:text-gray-900"><i class="fab fa-instagram"></i>Instagram</a>
        </div>
        </footer>
    )
}

export default Footer