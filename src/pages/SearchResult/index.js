import React, {useEffect, useState} from "react";
import Spinner from "../../components/Spinner";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResult ({ params }) {
    const {keyword} = params
    const { loading, gifs } = useGifs({ keyword })

    return <>
    {loading
        ? <Spinner/>
        : <ListOfGifs gifs={gifs}/>
    }
    </>
}