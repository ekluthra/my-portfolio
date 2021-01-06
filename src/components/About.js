import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import pic from "../aboutpic.png";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
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
            <div className="p-10 lg:pt-44 container mx-auto relative">
                <section className="bg-green-100 rounded-lg shadow-2xl lg:flex p-20">
                    {/* change image later to a more professional one */}
                    <img src={pic} className="rounded w-32 h-32 lg:w-64 lg:h-64 bg-cover"/>
                    <div>
                        <h1></h1>
                        <div>
                            BLOCK CONTENT
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}