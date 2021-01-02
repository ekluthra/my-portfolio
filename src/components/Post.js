import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from 'react-router-dom';

export default function Post(){
    const [postData, setPost] = useState(null);
    
    useEffect(() => {
        sanityClient.fetch(
                `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

    return(
        <main className="bg-gradient-to-l from-gray-700 via-gray-700 to-gray-800 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl text-white flex justify-center navfont">Blog Posts Page</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                        <article>
                            <Link to={"/post/"+post.slug.current} key={post.slug.current}>
                                <span 
                                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-indigo-400" 
                                    key={index}
                                >
                                    <img 
                                        src={post.mainImage.asset.url}
                                        alt={post.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="navfont text-gray-800 text-lg px-3 py-4 bg-blue-700 text-red-100 bg-opacity-75 rounded">
                                            {post.title}
                                        </h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}