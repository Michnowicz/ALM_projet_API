import "./Characters.css"
import Navbar from "../Navbar/Navbar.jsx"
import { useState, useEffect } from "react"
import UniqueCharacter from "./UniqueCharacter/UniqueCharacter.jsx"

export default function Characters() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(()=>{
        fetch("https://api.jikan.moe/v4/characters")
        .then((response)=>response.json())
        .then((response)=>setData(response.data))
    },[])

    function handleFilter(e) {
        setSearch(e.target.value.toLowerCase())
    }
    

    return(
        <div className="Characters">
            <Navbar/>

            <div className="mainContainer">
                <div className="Searchbar">
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" onChange={handleFilter}/>
                    </div>
                </div>
                
                {
                    data == "" ?
                    ""
                    :
                    <UniqueCharacter data={data} search={search} />
                }

            </div>

        </div>
    )
}