import "./DetailManga.css"
import Navbar from "../Navbar/Navbar.jsx"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import UniqueManga from "./UniqueManga/UniqueManga.jsx"

export default function DetailManga({}) {

    const {id} = useParams()

    const [data, setData] = useState([])
    

    useEffect(()=>{
        fetch("https://api.jikan.moe/v4/manga/"+id)
        .then((response)=> response.json())
        .then((response)=>setData(response))
    },[])

    return(
        <section className="DetailAnime">
            <Navbar />
            
            <div className="mainContainer">
                {
                    data == undefined ?
                    ""
                    :
                    <UniqueManga id={id} manga={data}/>
                }
            </div>
        </section>
    )
}