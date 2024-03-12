import { useEffect } from "react"
import "../TopAnime.css"
import { Link } from "react-router-dom"

export default function TopAnimeCards({data, search, favAnime, setFavAnime}) {


    useEffect(()=>{
        console.log(favAnime);
    },[favAnime])

    function handleOver(e) {
        e.target.classList.toggle("btnPillRoseOn")
    }


    function favouriteAnime(e) {

        //saving of favourite data
        let fav = {"title" : e.target.getAttribute("title"), "mal_id" : e.target.getAttribute("mal"), "image" : e.target.getAttribute("image")}

        // if flag is true, save fav as a new object in array favAnime
        let flag = true

        favAnime.map((a,i) => {
            if (a.title == e.target.getAttribute("title")) {
                flag = false
            }
        })

        if (flag == true) {
            setFavAnime([...favAnime, fav])
        } else {
            let newTable = favAnime.filter(a=> a.title !== e.target.getAttribute("title"))
            setFavAnime(newTable)
        }
        
    }



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
                                <i className={favAnime.filter(a=> a.title == d.title) == "" ? "fa-regular fa-heart heart" : "fa-solid fa-heart heartSelected" } title={d.title} mal={d.mal_id} image={d.images.jpg.image_url} onClick={favouriteAnime}></i>
                            </div>
                            <div className="btnInfo">
                                <Link to={"/anime/"+d.mal_id}>
                                    <button id={d.mal_id} className="btnPillRose" onMouseEnter={handleOver} onMouseLeave={handleOver}>Plus d'info</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}