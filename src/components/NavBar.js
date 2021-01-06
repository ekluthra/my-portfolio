import React from "react"
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar(){
    return (
        <header className="bg-gradient-to-l from-gray-700 via-gray-800 to-gray-900 bg-opacity-60">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact 
                        activeClassName="text-green-100 rounded bg-black bg-opacity-40"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white navfont hover:text-green-100 text-4xl font-bold tracking-widest" 
                    >
                        Ekagra Luthra
                    </NavLink>
                    <NavLink
                        to="/resume" 
                        activeClassName="text-green-100 rounded bg-black bg-opacity-40"
                        className = "inline-flex items-center py-3 px-3 my-6 rounded navfont text-white hover:text-green-100"
                    >
                        Resume
                    </NavLink>
                    <NavLink
                        to="/post" 
                        activeClassName="text-green-100 rounded bg-black bg-opacity-40"
                        className = "inline-flex items-center py-3 px-3 my-6 rounded navfont text-white hover:text-green-100"
                    >
                        Blog
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://www.linkedin.com/in/ekagra-luthra/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35}}
                    />
                    <SocialIcon 
                        url="https://github.com/ekluthra" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}