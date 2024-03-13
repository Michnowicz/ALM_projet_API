import "./Favourite.css"
import Navbar from "../Navbar/Navbar.jsx"
import Anime from "./components/Anime.jsx"
import Manga from "./components/Manga.jsx"


export default function Favourite({favAnime, favManga}) {
    
    function handleHover(e) {
        e.target.classList.toggle("hoverOn")
    }

    
    return(
        <div className="Favourite">
            <Navbar/>

            <div className="mainContainer">
                <div>
                    {
                        favAnime == null ?
                        <div></div>
                        :
                        <Anime favAnime={favAnime} handleHover={handleHover} />
                    }
                    {
                        favAnime == null ?
                        <div></div>
                        :
                        <Manga favManga={favManga} handleHover={handleHover} />
                    }
                </div>
            </div>
        </div>
    )
}