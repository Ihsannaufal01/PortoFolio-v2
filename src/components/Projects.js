import React from "react";
import Mart from "../asset/S'Mart.png";
import Game from "../asset/Gemi.jpg";
import Tamu from "../asset/Buku Tamu.png";
import Sampah from "../asset/Recycle Waste.png";

const Projects = () => {
 return (
    <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">My projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
                <div className="bg-gray-100 p-4 rounded">
                    <img src={Mart} alt="S'mart" className="w-full h-48 object-cover mb-4 border border-black rounded-xl"/>
                    <h3 className=" text-2xl font-bold mb-2">S'Mart</h3>
                    <p className="text-gray-700">School Project of Social Media Marketplace</p>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                    <img src={Game} alt="S'mart" className="w-full h-48 object-cover mb-4 border border-black rounded-xl"/>
                    <h3 className=" text-2xl font-bold mb-2">Gemi (Giraffe Mini)</h3>
                    <p className="text-gray-700">Game School Project</p>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                    <img src={Tamu} alt="S'mart" className="w-full h-48 object-cover mb-4 border border-black rounded-xl"/>
                    <a href="https://github.com/jirbthagoras/buku-tamu" className=" text-2xl font-bold mb-2">Buku tamu</a>
                    <p className="text-gray-700">Wedding School Project</p>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                    <img src={Sampah} alt="S'mart" className="w-full h-48 object-cover mb-4 border border-black rounded-xl"/>
                    <a href="https://github.com/Ihsannaufal01/Lomba-Udayana" className=" text-2xl font-bold mb-2">Recycle Waste</a>
                    <p className="text-gray-700">Udayana Contest Project</p>
                </div>
            </div>

        </div>
    </section>
 )
}

export default Projects