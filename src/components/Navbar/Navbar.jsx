import { useEffect, useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"


export default function Navbar() {

    const [page, setPage] = useState('')

    useEffect(()=>{
        setPage(window.location.pathname);
    },[])

    function handleHover(e) {
        if (e.target.className.includes("clicked") == false) {
            e.target.classList.toggle("hover")
        }
    }

    return(
        <nav>
            <div className="logo">
                <Link to="/" className="myAnime">MyAnime</Link>
            </div>

            <div className="linkDiv">
                <Link to="/" className={page == "/" || page.includes("/anime") ? "clicked" :""} onMouseEnter={handleHover} onMouseLeave={handleHover}>TOP ANIME</Link>
                <Link to='/manga' className={page.includes("/manga") ? "clicked" :""} onMouseEnter={handleHover} onMouseLeave={handleHover}>TOP MANGA</Link>
                <Link to="/characters" className={page == "/characters" ? "clicked" :""} onMouseEnter={handleHover} onMouseLeave={handleHover}>CHARACTERS</Link>
            </div>
        </nav>
    )
}