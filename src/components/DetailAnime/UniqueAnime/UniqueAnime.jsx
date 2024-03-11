import "../DetailAnime.css"
import { useEffect } from "react";


export default function UniqueAnime({anime}) {
    
    useEffect(()=>{
        console.log(anime.data.mal_id);
        fetch("https://api.jikan.moe/v4/anime/52991/themes")
    },[])

    return(
        <div className="UniqueAnime">
            <div className="top">
                <div className="textDiv">
                    <div className="title">
                        <h2>{anime.data.title}</h2>
                        <p>{anime.data.score}</p>
                    </div>
                    <p className="japaneseTitle">{anime.data.title_japanese}</p>
                    <div className="synopsis">
                        <b>Synopsis:</b>
                        <hr />
                        <p>{anime.data.synopsis}</p>
                        <p><b>Studio : {anime.data.studios[0].name}</b></p>
                        <div>
                            <b>Genre(s) :</b> 
                            {anime.data.genres.map((g,i)=> (
                                <p key={i}>{g.name}</p>
                            ))} 
                        </div>
                    </div>
                    <div className="opening">
                        <b>Opening :</b>
                        <hr />
                        <p>regarder api/manga/id/theme</p>
                    </div>
                    <div className="ending">
                        <b>Endings :</b>
                        <hr />
                        <p>api/manga/id/theme</p>
                    </div>

                </div>

                <div className="imageDiv">
                    <img src={anime.data.images.jpg.image_url} alt="" />
                </div>
            </div>

        </div>
    )
}