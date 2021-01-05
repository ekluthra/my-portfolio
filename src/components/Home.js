import React from "react"
import image from "../tor.jpg";
import Project from "./Project";
import About from "./About";

export default function Home(){
    return (
        <main>
            {/* <img 
                src={image} 
                alt="gradient" 
                className="absolute object-cover w-full h-full"
            /> */}
            <section className="bg-fixed relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8" style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}>
                <h1 className="text-8xl text-white font-bold navfont leading-none lg:leading-snug">
                    Hi! I'm 
                    <h1 className="text-10xl text text-green-100 navfont leading-none lg:leading-snug">Ekagra Luthra</h1>
                    and this is my website.
                </h1>
            </section>
            <About />
            <Project />
        </main>
    )
}