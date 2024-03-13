import "../Favourite.css"
import { Link } from "react-router-dom"

export default function Anime({favAnime, handleHover}) {

    return(
        <div className="Anime">
            <b className="synoTitle">Favourite Anime</b>
            <hr />
            <div className="container">
                {
                    favAnime.map((a,i)=>(
                        <Link key={i} to={"/anime/"+a.mal_id} onMouseEnter={handleHover} onMouseLeave={handleHover} >
                            <b>{a.title}</b>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}