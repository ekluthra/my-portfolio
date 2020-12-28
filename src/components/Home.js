import React from "react"
import image from "../gradient.png";
export default function Home(){
    return (
        <main>
            <img 
                src={image} 
                alt="gradient" 
                //changed here
                className="absolute object-cover w-full h-full z-0"
            />
            <section className="relative min-h-screen pt-12 lg:pt-64 px-8">
                {/* changed here */}
                <h1 className="text-6xl text-white font-bold navfont leading-none lg:leading-snug">Hi! I'm</h1>
                <h1 className="text-6xl text-green-100 font-bold navfont leading-none lg:leading-snug home-name">Ekagra Luthra</h1>
                <h1 className="text-6xl text-white font-bold navfont leading-none lg:leading-snug">and this is my website</h1>
            </section>
        </main>
    )
}