import "./Characters.css"
import Navbar from "../Navbar/Navbar.jsx"
import { useState, useEffect } from "react"
import UniqueCharacter from "./UniqueCharacter/UniqueCharacter.jsx"

export default function Characters() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(()=>{
        fetch("https://api.jikan.moe/v4/top/characters")
        .then((response)=>response.json())
        .then((response)=>setData(response.data))
    },[])


    function handleFilter(e) {
        setSearch(e.target.value.toLowerCase())
    }

    function handleOver(e) {
        if (e.target.localName == "img") {
            e.target.nextElementSibling.classList.toggle("hidden")
        } else if (e.target.localName == "div") {
            // console.log(e.target.children);
            e.target.classList.toggle("hidden")
        } else if (e.target.className == "name" || e.target.className == "nickname") {
            // console.log(e.target.parentElement);
            e.target.parentElement.classList.toggle("hidden")
        }
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
                    <UniqueCharacter handleOver={handleOver} data={data} search={search} />
                }

            </div>

        </div>
    )
}