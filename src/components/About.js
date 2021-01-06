import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import pic from "../aboutpic.png";
import SkillBar from 'react-skillbars';

const builder = imageUrlBuilder(sanityClient);

const skills = [
    {type: "Python", level: 90},
    {type: "Java", level: 90},
    {type: "HTML", level: 85},
    {type: "CSS", level: 85},
    {type: "React", level: 80},
    {type: "Javascript", level: 70},
    {type: "Guitar", level:1}
]
const colors = {
    "bar": "#10B981",
    "title": {
      "text": "#374151",
      "background": "#D1FAE5"
    }
  }

export default function About(){
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div>Loading...</div>

    return(
        <main className="relative bg-gradient-to-l from-gray-700 via-gray-700 to-gray-800 min-h-screen p-6">
            <div className="lg:pt-36 container mx-auto relative">
                <section className="bg-gray-900 rounded-lg shadow-2xl lg:flex p-20">
                    <img 
                        src={pic} 
                        className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                        alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="navfont text-5xl text-white mb-4">
                            About Me
                        </h1>
                        <div className="mb-10 prose lg:prose-xl text-white">
                            I'm a computer science and mathematics student at the University of Toronto. I also play guitar and take pictures sometimes.
                        </div>
                        <h1 className="navfont text-5xl text-white mb-4">
                            Technical Skills
                        </h1>
                        <SkillBar skills={skills} animationDelay={500} colors={colors}/>
                    </div>
                </section>
            </div>
        </main>
    )
}