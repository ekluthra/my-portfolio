import React from "react"
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return (
        <header className="bg-gray-900 bg-opacity-60">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact 
                        activeClassName="text-red-400 rounded bg-black bg-opacity-40"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white navfont hover:text-red-400 text-4xl font-bold tracking-widest" 
                    >
                        Ekagra Luthra
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        activeClassName="text-red-400 rounded bg-black bg-opacity-40"
                        className = "inline-flex items-center py-3 px-3 my-6 rounded navfont text-white hover:text-red-400"
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/project" 
                        activeClassName="text-red-400 rounded bg-black bg-opacity-40"
                        className = "inline-flex items-center py-3 px-3 my-6 rounded navfont text-white hover:text-red-400"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/post" 
                        activeClassName="text-red-400 rounded bg-black bg-opacity-40"
                        className = "inline-flex items-center py-3 px-3 my-6 rounded navfont text-white hover:text-red-400"
                    >
                        Blog
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}