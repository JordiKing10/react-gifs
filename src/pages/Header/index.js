import React, { useState } from "react";
import { Link, useLocation } from 'wouter'
import './styles.css'



export default function Header (){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
        console.log({keyword});
    }

    const handleChange = evt =>  {
        setKeyword(evt.target.value)
    }

    return (
        <header>
            <nav>
                <Link to='/'><h1>Enlaces GIFS</h1></Link>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} placeholder="Search a gif here..." type='text' value={keyword} />
                </form>
            </nav>
        </header>
    )
}