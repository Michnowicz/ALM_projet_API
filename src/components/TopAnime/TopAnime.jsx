import "./TopAnime"
import Navbar from "../Navbar/Navbar.jsx"
import TopAnimeCards from "./TopAnimeCards/TopAnimeCards.jsx";
import { useEffect, useState } from 'react';

export default function TopAnime() {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://api.jikan.moe/v4/top/anime")
        .then((response) => response.json())
        .then((response) => setData(response.data))
    },[])

    useEffect(()=>{
        console.log(data);
    },[data])
    

    return(
        <section className="TopAnime">
            <Navbar/>

            <div className="mainContainer">

                <div className="Searchbar">
                    <div className="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text"/>
                    </div>
                    <div className="filter">
                        <select name="" id="">
                            <option value={1}>Tous</option>
                            <option value={2}>12 épisodes ou moins</option>
                            <option value={3}>24 épisodes ou moins</option>
                            <option value={4}>Plus de 24 épisodes</option>
                        </select>
                    </div>
                </div>

                <TopAnimeCards data={data}/>

            </div>

        </section>
    )
}