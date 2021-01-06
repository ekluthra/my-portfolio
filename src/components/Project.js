import React, {useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project(){
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            link,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return(
        <main className ="bg-gradient-to-l from-gray-700 via-gray-700 to-gray-800 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-white pb-10 text-5xl flex justify-center navfont">
                    My Projects
                </h1>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-gray-900 p-10">
                            <h3 className="text-white navfont text-3xl font-bold mb-2 hover:text-green-100">
                                <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a>
                            </h3>
                            <div className="text-gray-400 text-xs space-x-4">
                                <span >
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>
                                <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:text-green-100">
                                    View Project{" "}
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}