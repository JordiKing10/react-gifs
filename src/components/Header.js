import React from "react";
import { Link } from 'wouter'
import './Header.css'



export default function Header (){
    return (
        <header>
            <nav>
                <Link to='/gifs/'><h1>Enlaces GIFS</h1></Link>
                <Link to='/gifs/panda'>Gifs de pandas</Link>
                <Link to='/gifs/monos'>Gifs de monos</Link>
                <Link to='/gifs/perro'>Gifs de perro</Link>
            </nav>
        </header>
    )
}