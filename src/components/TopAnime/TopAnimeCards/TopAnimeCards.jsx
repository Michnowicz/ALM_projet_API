import "../TopAnime.css"
import { Link } from "react-router-dom"

export default function TopAnimeCards({data, search, }) {
    

    return(
        <div className="TopAnimeCards">
            {
                data.filter(d => d.title.toLowerCase().includes(search)).map((d,i)=>(
                    <div key={i} className="card">
                        <div className="imageDiv">
                            <img src={d.images.jpg.image_url} alt="" />
                        </div>
                        <div className="textDiv">
                            <div className="cardText">
                                <h3>{d.title}</h3>
                                <p><b>épisodes :</b> {d.episodes}</p>
                                <p><b>score :</b> {d.score}</p>
                                <p><b>studio :</b> {d.studios[0].name}</p>
                            </div>
                            <div className="btnInfo">
                                <Link>
                                    <button className="btnPillRose">Plus d'info</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}