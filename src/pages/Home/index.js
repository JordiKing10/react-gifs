import React from "react";
import { Link } from "wouter";
import './Home.css'
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

const GIFS = ['Capibara','Salmon','Oso','Mofeta','Lagarto']

export default function Home(){
    const { loading, gifs } = useGifs()
    return (
    <>
        <h3 className="App-title">Ultima búsqueda</h3>
        <ListOfGifs gifs={gifs}/>
        <h3 className="App-title">Gifs populares</h3>
        <ul>
            {GIFS.map((popularGif) =>(
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                </li>
            ))}
        </ul>
    </>
    )
}