import "../TopManga.css"
import { Link } from "react-router-dom"

export default function TopMangaCards({data, search}) {
    

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
                                <p><b>volumes :</b> 
                                    {d.volumes == null ? "/" : d.volumes}
                                </p>
                                <p><b>score :</b> {d.score}</p>
                                <div>
                                <b>authors :</b> {d.authors[0].name}</div>
                            </div>
                            <div className="btnInfo">
                                <Link to={"/manga/"+d.mal_id}>
                                    <button id={d.mal_id} className="btnPillBlue">Plus d'info</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}