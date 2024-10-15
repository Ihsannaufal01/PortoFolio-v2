import React from "react";
import Profile from '../asset/Profile.JPG';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100"> 
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-8 text-gray-700">
                    Tentang Saya
                </h2>
                <div className="flex flex-col items-center mb-12">
                    <img src={`${Profile}`} alt="profile picture" className="w-32 h32 rounded-full object-cover mb4 shadow-lg"/>
                    <p className="text-lg text-gray-600 mb-2">Student</p>
                    <p className="text-xl text-gray-700 font-semibold">Saya adalah murid dari SMKN Negeri 8 Semarang</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">Tailwind Developer</h3>
                        <p className="text-gray-700 mb-4">
                            ya begitu, saya sudah lumayan mengenal tentang Tailwind
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">Ms. Office</h3>
                        <p className="text-gray-700 mb-4">
                            pemahaman saya sudah luas tentang aplikasi aplikasi Ms. Office seperti Word, Excel, dan PowerPoint. saya sudah menggunakan ini sedari SD
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">Unity</h3>
                        <p className="text-gray-700 mb-4">
                            Sebenarnya pemahaman saya tentang ini belum Luas, namun project saya untuk sekolah sekarang menggunakan Unity
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">Photographer</h3>
                        <p className="text-gray-700 mb-4">
                            Saya bisa menggunakan Kamera. dan saya sudah mengerti tentang segitiga exposure
                        </p>
                    </div>
                </div>
                <p className="text-lg text-gray-600 mt-8">
                    Saya sekarang juga sedang Belajar tentang MySQL Administration
                </p>
            </div>
        </section>
    )
}

export default About