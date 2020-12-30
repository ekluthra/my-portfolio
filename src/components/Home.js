import React from "react"
import image from "../gradient.png";
export default function Home(){
    return (
        <main>
            {/* <img 
                src={image} 
                alt="gradient" 
                className="absolute object-cover w-full h-full"
            /> */}
            <section className="bg-gradient-to-l from-gray-700 via-gray-700 to-gray-800 relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white font-bold navfont leading-none lg:leading-snug">
                    Hi! I'm 
                    <h1 className="home-name text-green-100 navfont leading-none lg:leading-snug">Ekagra Luthra</h1>
                    and this is my website.
                </h1>
            </section>
        </main>
    )
}