import "../Favourite.css"
import { Link } from "react-router-dom"

export default function Anime({favAnime}) {
    

    return(
        <div className="Anime">
            <b className="synoTitle">Favourite Anime</b>
            <hr />
            <div className="container">
                {
                    favAnime.map((a,i)=>(
                        <Link key={i} to={"/anime/"+a.mal_id}>
                            <b>{a.title}</b>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}