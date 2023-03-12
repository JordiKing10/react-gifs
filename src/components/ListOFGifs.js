import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from '../services/getGifs'

/*
  Función que muestra una lista de GIFs en pantalla, con posibilidad de buscar según una keyword

  Params:
   - params: objeto con la keyword a buscar en la API Giphy

  Return:
   - JSX que renderiza los componentes de los resultados de búsqueda
*/
export default function ListOfGifs ({ params }) {
    const { keyword } = params; // Obtiene la keyword del objeto props.params
    const [gifs, setGifs] = useState(
        { loading: false, results: []}
    )

    /*
      Hook de efecto que ejecuta una vez tras haber montado el componente y cada vez que la keyword cambie.
      Esta función utiliza la función asyncrona getGifs para obtener los GIFs y actualiza el estado del componente.
    */
    useEffect(function () {
        setGifs(actualGifs => ({ loading: true, results: actualGifs.results }));

        getGifs({ keyword }).then(gifs => {
            setGifs({ loading: false, results: gifs })
        })
    }, [keyword])

    if (gifs.loading) return <i>Cargando 🕑</i> // Si loading es true devuelve cargando

    /*
      Devuelve el JSX necesarios para mostrar los resultados de búsqueda. Se hace uso de una librería react llamada 'Gif' para
      cada resultado y se mapea sobre el array de results en los datos del componente.
    */
    return (
        <div>
            {gifs.results.map(({id, title, url}) => (
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