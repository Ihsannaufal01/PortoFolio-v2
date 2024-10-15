import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-2 text-gray-800">Contact me</h2>
                <p className="text-xl mb-5 text-gray-600">
                    jangan ragu untuk menghubungi saya!
                </p>
                <a href="mailto:azhimanaufal@gmail.com" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-3 rounded-lg shadow-md transition duration-300">
                    Send Mail
                </a>
            </div>
        </section>
    )
}

export default Contact