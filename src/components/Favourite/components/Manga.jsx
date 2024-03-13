import "../Favourite.css"
import { Link } from "react-router-dom"

export default function Manga({favManga, handleHover}) {
    

    return(
        <div className="Anime">
            <b className="synoTitle">Favourite Manga</b>
            <hr />
            <div className="container">
                {
                    favManga.map((a,i)=>(
                        <Link key={i} to={"/manga/"+a.mal_id} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                            <b>{a.title}</b>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}