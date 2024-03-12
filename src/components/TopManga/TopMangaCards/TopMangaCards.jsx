import "../TopManga.css"
import { Link } from "react-router-dom"

export default function TopMangaCards({data, search, favManga, setFavManga}) {
    
    function handleOver(e) {
        e.target.classList.toggle("btnPillBlueOn")
    }

    function favouriteManga(e) {

        //saving of favourite data
        let fav = {"title" : e.target.getAttribute("title"), "mal_id" : e.target.getAttribute("mal"), "image" : e.target.getAttribute("image")}

        if (favManga == null) {
            setFavManga([fav])
        } else {
            // if flag is true, save fav as a new object in array favManga
            let flag = true
    
            favManga.map((m,i) => {
                if (m.title == e.target.getAttribute("title")) {
                    flag = false
                }
            })
    
            if (flag == true) {
                setFavManga([...favManga, fav])
            } else {
                let newTable = favManga.filter(m=> m.title !== e.target.getAttribute("title"))
                setFavManga(newTable)
            }

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
                                <p><b>volumes :</b> 
                                    {d.volumes == null ? "/" : d.volumes}
                                </p>
                                <p><b>score :</b> {d.score}</p>
                                <div>
                                <b>authors :</b> {d.authors[0].name}</div>
                                <i  className={favManga.filter(a=> a.title == d.title) == "" ? "fa-regular fa-heart heart" : "fa-solid fa-heart heartSelected" } title={d.title} mal={d.mal_id} image={d.images.jpg.image_url} onClick={favouriteManga}></i>
                            </div>
                            <div className="btnInfo">
                                <Link to={"/manga/"+d.mal_id}>
                                    <button id={d.mal_id} className="btnPillBlue" onMouseEnter={handleOver} onMouseLeave={handleOver}>Plus d'info</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}