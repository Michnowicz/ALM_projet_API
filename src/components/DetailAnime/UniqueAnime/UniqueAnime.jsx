import "../DetailAnime.css"
import { useEffect, useState } from "react";


export default function UniqueAnime({anime, id}) {

    const [theme, setTheme] = useState([])
    
    useEffect(()=>{
        console.log(anime.data.mal_id);
        fetch("https://api.jikan.moe/v4/anime/"+id+"/themes")
        .then((response)=>response.json())
        .then((response)=>setTheme(response.data))
    },[])


    return(
        <div className="UniqueAnime">
            <div className="top">
                <div className="textDiv">
                    <div className="title">
                        <h2>{anime.data.title}</h2>
                        <div className="score">
                            <i className="fa-solid fa-star"></i>
                            <p>{anime.data.score}</p>
                        </div>
                    </div>

                    <b className="japaneseTitle">{anime.data.title_japanese}</b>

                    <div className="synopsis sect">
                        <b className="synoTitle">Synopsis:</b>
                        <hr />
                        <p id="synopsis">{anime.data.synopsis}</p>
                        <p><b>Studio : {anime.data.studios[0].name}</b></p>
                        <div className="synoGenre">
                            <b>Genre(s) :</b> 
                            {anime.data.genres.map((g,i)=> (
                                <p key={i}>{g.name}</p>
                            ))} 
                        </div>
                    </div>

                    <div className="opening sect">
                        <b  className="synoTitle">Opening :</b>
                        <hr />
                        {
                            (theme.openings == undefined) ?
                            ""
                            :
                            theme.openings.map((o,i)=>(
                                <p className="themeInfo" key={i}>{o}</p>
                            ))
                        }
                    </div>

                    <div className="ending sect">
                        <b className="synoTitle">Endings :</b>
                        <hr />
                        {
                            (theme.endings == undefined) ?
                            ""
                            :
                            theme.endings.map((e,i)=>(
                                <p className="themeInfo" key={i}>{e}</p>
                            ))
                        }
                    </div>

                </div>

                <div className="imageDiv">
                    <img src={anime.data.images.jpg.large_image_url} alt="" />
                </div>
            </div>

            <div className="videoDiv">
                
                {
                    anime.data.trailer.url !== null ?
                    <iframe src={anime.data.trailer.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    :
                    <b className="indispo">Trailer indisponible</b>
                }
            </div>

        </div>
    )
}