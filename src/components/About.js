import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

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
        <main className="relative bg-gradient-to-l from-gray-700 via-gray-700 to-gray-800 min-h-screen p-12">
            <div>
                <section>
                    <img />
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