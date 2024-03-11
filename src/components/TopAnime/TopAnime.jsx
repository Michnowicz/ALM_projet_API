import "./TopAnime"
import Navbar from "../Navbar/Navbar.jsx"
import TopAnimeCards from "./TopAnimeCards/TopAnimeCards.jsx";
import { useEffect, useState } from 'react';

export default function TopAnime() {

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [option, setOption] = useState('')
    const [search, setSearch] = useState('')

    useEffect(()=>{
        fetch("https://api.jikan.moe/v4/top/anime")
        .then((response) => response.json())
        .then((response) => setData(response.data))
    },[])

    useEffect(()=>{
        let newData = ''
        if (option == 1) {
            newData = data
        } else if (option == 2) {
            newData = data.filter(d => d.episodes <= 12)
        } else if (option == 3) {
            newData = data.filter(d => d.episodes <= 24)
        } else if (option == 4) {
            newData = data.filter(d => d.episodes > 24)
        }
        setFilteredData(newData)
    },[option])

    function handleFilter(e) {
        setSearch(e.target.value.toLowerCase())
    }

    function handleOption(e) {
        setOption(e.target.value);
    }
    

    return(
        <section className="TopAnime">
            <Navbar/>

            <div className="mainContainer">
                <div className="Searchbar">
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" onChange={handleFilter}/>
                    </div>
                    <div className="filter">
                        <select name="" id="" onChange={handleOption}>
                            <option value={1}>Tous</option>
                            <option value={2}>12 épisodes ou moins</option>
                            <option value={3}>24 épisodes ou moins</option>
                            <option value={4}>Plus de 24 épisodes</option>
                        </select>
                    </div>
                </div>

                <TopAnimeCards data={filteredData == "" ? data : filteredData} search={search} />
                {/* <TopAnimeCards data={data} search={search} /> */}

            </div>

        </section>
    )
}