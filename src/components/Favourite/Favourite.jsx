import "./Favourite.css"
import Navbar from "../Navbar/Navbar.jsx"
import Anime from "./components/Anime.jsx"
import Manga from "./components/Manga.jsx"


export default function Favourite({favAnime, favManga}) {
    

    
    return(
        <div className="Favourite">
            <Navbar/>

            <div className="mainContainer">
                <div className="favAnime">
                    <Anime favAnime={favAnime}/>
                    <Manga favManga={favManga}/>
                </div>
            </div>
        </div>
    )
}