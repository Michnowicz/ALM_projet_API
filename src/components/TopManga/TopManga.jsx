import "./TopManga.css"
import Navbar from "../Navbar/Navbar.jsx"

import { useEffect, useState } from 'react';

import TopMangaCards from "./TopMangaCards/TopMangaCards.jsx";

export default function TopManga({favManga, setFavManga}) {

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        fetch("https://api.jikan.moe/v4/top/manga")
        .then((response) => response.json())
        .then((response) => setData(response.data))
    },[])


    function handleFilter(e) {
        setSearch(e.target.value.toLowerCase())
    }
    

    return(
        <section className="TopManga">
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
                    filteredData == "" ?
                    <TopMangaCards favManga={favManga} setFavManga={setFavManga} data={data} search={search} />
                    :
                    <TopMangaCards favManga={favManga} setFavManga={setFavManga} data={filteredData} search={search} />

                }
                

            </div>

        </section>
    )
}