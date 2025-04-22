import React from 'react'
import { lastAdded1, lastAdded2, lastAdded3, lastAdded4 } from '../../assets'

const LatestAdded = () => {
    return (
        <div className="mx-auto">
            <h1 className="primary-header mt-20">Latest Added</h1>
            <p className='primary-paragraph'>See Our New Products</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 md:px-0">
                {/* Card 1 */}
                <div className="bg-white rounded-none shadow-lg overflow-hidden aspect-video relative w-full h-[300px] sm:h-[450px] xl:h-[650px]">
                    <div className="image-container relative z-0">
                        <img
                            src={lastAdded1}
                            alt="Nature"
                            className="w-full h-full object-cover bg-gradient-to-t from-black to-transparent transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.08]"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
                        <h2 className="card-title text-white text-center">Jeores Bag</h2>
                        <button className="button-secondary mx-auto">
                            Shop Now
                        </button>
                    </div>

                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-none shadow-lg overflow-hidden aspect-video relative w-full h-[300px] sm:h-[450px] xl:h-[650px]"> 
                    <div className="image-container relative z-0">
                        <img
                            src={lastAdded2}
                            alt="Nature"
                            className="w-full h-full object-cover bg-gradient-to-t from-black to-transparent transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.08]
"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
                        <h2 className='card-title text-white'>Shoulders Bag</h2>
                        <button className="button-secondary w-full">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-none shadow-lg overflow-hidden aspect-video relative w-full h-[300px] sm:h-[450px] xl:h-[650px]">
                    <div className="image-container relative z-0">
                        <img
                            src={lastAdded3}
                            alt="Nature"
                            className="w-full h-full object-cove bg-gradient-to-t from-black to-transparent transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.08]
"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
                        <h2 className='card-title text-white'>Kittie Loafer</h2>

                        <button className="button-secondary w-full">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-none shadow-lg overflow-hidden aspect-video relative w-full h-[300px]  sm:h-[450px] xl:h-[650px]">
                    <div className="image-container relative z-0">
                        <img
                            src={lastAdded4}
                            alt="Nature"
                            className="w-full h-full object-cover bg-gradient-to-t from-black to-transparent transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.08]
"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
                        <h2 className='card-title text-white'>Keep Wallet Free</h2>

                        <button className="button-secondary w-full">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestAdded