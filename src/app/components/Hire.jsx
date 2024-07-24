import React from "react";
import Image from "next/image";

const Hire = () => {
    return(
        <div className="mx-4 my-12 sm:mx-8 md:mx-16 lg:mx-16 xl:mx-16 font-mono">
            <section className="bg-gradient-to-br from-purple-500/50 to-indigo-600/50 py-16 px-4 sm:px-6 lg:px-8 rounded-xl overflow-hidden shadow-[0_10px_50px_rgba(107,70,193,0.5)] hover:shadow-[0_20px_70px_rgba(99,102,241,0.6)] transition-shadow duration-300">
                <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Hire Me</h2>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="w-full lg:w-1/2">
                    <Image 
                        src="/hire/hire_image.jpg"
                        width={700}
                        height={700}
                        alt="Hire Me"
                        className="rounded-lg shadow-xl"
                    />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                    <h3 className="text-2xl font-semibold text-white">Let&apos;s work together</h3>
                    <p className="text-gray-300 text-lg">
                        The key to building long term relationships is trust. I take the responsibility of being your development partner seriously. My design agreement gives you peace of mind that your intellectual property is safeguarded.
                    </p>
                    <button className="bg-violet-950 hover:bg-violet-700 text-white font-bold py-3 px-10 rounded transition duration-300 ease-in-out transform hover:scale-105">
                        Hire Me
                    </button>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Hire;