import React from 'react'
import Image from "next/image";

const Hero: React.FC = () => {

    return (
        <div className="bg-hero-pattern bg-cover h-96 flex items-center justify-center">
            <div className="banner_caprion p-5  bg-white/30 rounded text-center">
                <h1 className="text-dark text-4xl font-bold">Welcome to My Website</h1>
                <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default Hero;