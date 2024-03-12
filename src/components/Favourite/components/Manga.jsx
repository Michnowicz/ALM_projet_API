import "../Favourite.css"
import { Link } from "react-router-dom"

export default function Manga({favManga}) {
    

    return(
        <div className="Anime">
            <b className="synoTitle">Favourite Manga</b>
            <hr />
            <div className="container">
                {
                    favManga.map((a,i)=>(
                        <Link key={i} to={"/manga/"+a.mal_id}>
                            <b>{a.title}</b>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}