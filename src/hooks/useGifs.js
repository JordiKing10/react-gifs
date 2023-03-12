import {useEffect, useState} from "react"
import getGifs from "../services/getGifs"

export function useGifs ({ keyword } = {keyword: null}){
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    
    useEffect(function () {
        setLoading(true)
        //recuperamos la keyword
        const keywordToUSe = keyword || localStorage.getItem('lastKeyword')

        getGifs({keyword: keywordToUSe}).then(gifs => {
            setGifs(gifs)
            setLoading(false)
            //guardamosla keyword en el local storage
            localStorage.setItem('lastKeyword',keyword)
        })
    }, [keyword])
    return {loading, gifs}
}