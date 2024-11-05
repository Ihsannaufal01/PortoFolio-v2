import React from "react";
import Cover from '../asset/Hero.png'

const Hero = () => {
    return (
        <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url(${Cover})` }}>
            <div className=" bg-black bg-opacity-70 h-full flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-5xl font-bold">Halo, saya Ihsan!!</h2>
                <p className=" text-2xl mb-8 pt-5">Web Developer Student</p>
                <a href="#projects" className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                    Project saya
                </a>
            </div>
        </section>
    )
}

export default Hero
