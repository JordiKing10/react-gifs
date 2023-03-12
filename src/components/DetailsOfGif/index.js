import React, {useEffect, useState} from "react";
import Gif from "../Gif";
import getGif from '../../services/getSingleGif'
import Spinner from "../Spinner";

export default function DetailsOfGif({params}) {
    const { id } = params; // Obtiene la keyword del objeto props.params
    const [gif, setGif] = useState(
        { loading: false, result: []}
    )

    /*
      Hook de efecto que ejecuta una vez tras haber montado el componente y cada vez que la keyword cambie.
      Esta función utiliza la función asyncrona getGifs para obtener los GIFs y actualiza el estado del componente.
    */
    useEffect(function () {
        setGif(actualGif => ({ loading: true, result: actualGif.result }));

        getGif({ id }).then(gif => {
            setGif({ loading: false, result: gif })
        })
    }, [id])
    
    if (gif.loading) return <Spinner/> // Si loading es true devuelve cargando

    /*
      Devuelve el JSX necesarios para mostrar los resultados de búsqueda. Se hace uso de una librería react llamada 'Gif' para
      cada resultado y se mapea sobre el array de results en los datos del componente.
    */
    return (
        <div>
            <Gif 
                key={gif.result.id}
                id={gif.result.id}
                title={gif.result.title}
                url={gif.result.url}
            />
        </div>
    )
}