import React from "react"
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        Ekagra Luthra
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/project">
                        Projects
                    </NavLink>
                    <NavLink to="/post">
                        Blog
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}