import React from 'react'
import { about } from '../../assets'

const Banner = () => {
    return (
        <div className='w-full'>
            <section className="relative w-full h-screen bg-black">
                {/* Background Image */}
                <img
                    src={about} // replace with your image or use {hero}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover z-0 overflow-hidden"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[1.2] font-normal tracking-wide text-center russo">
                        Discover our leather website,<br />
                        offering premium, handcrafted<br />
                        leather products
                    </h1>
                </div>
            </section>

        </div>
    )
}

export default Banner;