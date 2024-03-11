import "./DetailAnime.css"
import Navbar from "../Navbar/Navbar.jsx"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import UniqueAnime from "./UniqueAnime/UniqueAnime.jsx"

export default function DetailAnime({}) {

    const {id} = useParams()

    const [data, setData] = useState([])
    

    useEffect(()=>{
        fetch("https://api.jikan.moe/v4/anime/"+id)
        .then((response)=> response.json())
        .then((response)=>setData(response))
    },[])

    return(
        <section className="DetailAnime">
            <Navbar />
            
            <div className="mainContainer">
                {
                    data == "" ?
                    ""
                    :
                    <UniqueAnime id={id} anime={data}/>
                }
            </div>
        </section>
    )
}