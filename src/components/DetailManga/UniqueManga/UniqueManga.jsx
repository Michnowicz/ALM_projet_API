import "../DetailManga.css"
import { useEffect, useState } from "react";


export default function UniqueManga({manga, id}) {

    // const [theme, setTheme] = useState([])
    
    // useEffect(()=>{
    //     console.log(manga.data.mal_id);
    //     fetch("https://api.jikan.moe/v4/manga/"+id)
    //     .then((response)=>response.json())
    //     .then((response)=>setTheme(response.data))
    // },[])


    return(
        <div className="UniqueAnime">
            <div className="top">
                <div className="textDiv">
                    <div className="title">
                        <h2>{manga.data.title}</h2>
                        <div className="score">
                            <i className="fa-solid fa-star"></i>
                            <p>{manga.data.score}</p>
                        </div>
                    </div>

                    <b className="japaneseTitle">{manga.data.title_japanese}</b>

                    <div className="synopsis sect">
                        <b className="synoTitle">Synopsis:</b>
                        <hr />
                        <p id="synopsis">{manga.data.synopsis}</p>
                        <b>Author : {manga.data.authors[0].name}</b>
                        <div className="synoGenre">
                            <b>Genre(s) :</b> 
                            {manga.data.genres.map((g,i)=> (
                                <p key={i}>{g.name}</p>
                            ))} 
                        </div>
                        <p className="synopsisText"><b>Status: </b> {manga.data.status}</p>
                        <p className="synopsisText"><b>Dates: </b> {manga.data.published.string}</p>
                    </div>

                </div>

                <div className="imageDiv">
                    <img src={manga.data.images.jpg.large_image_url} alt="" />
                </div>
            </div>

        </div>
    )
}