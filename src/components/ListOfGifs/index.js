import React, { useEffect, useState } from "react";
import Gif from "../Gif";
import getGifs from '../../services/getGifs'
import Spinner from "../Spinner";

/*
  Función que muestra una lista de GIFs en pantalla, con posibilidad de buscar según una keyword

  Params:
   - params: objeto con la keyword a buscar en la API Giphy

  Return:
   - JSX que renderiza los componentes de los resultados de búsqueda
*/
export default function ListOfGifs ({ gifs }) {
    return (
        <div className="ListOfGifs">
            {gifs.map(({id, title, url}) => (
                <Gif 
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />
            ))}
        </div>
    )
    
}