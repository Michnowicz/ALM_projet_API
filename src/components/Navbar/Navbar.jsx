import { useEffect, useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"


export default function Navbar() {

    const [page, setPage] = useState('')

    useEffect(()=>{
        setPage(window.location.pathname);
    },[])

    useEffect(()=>{
        console.log(page);
    },[page])

    return(
        <nav>
            <div className="logo">
                <Link to="/" className="myAnime">MyAnime</Link>
            </div>

            <div className="linkDiv">
                <Link to="/" className={page == "/" || page.includes("/anime") ? "clicked" :""}>TOP ANIME</Link>
                <Link to='/manga' className={page.includes("/manga") ? "clicked" :""}>TOP MANGA</Link>
                <Link to="/characters" className={page == "/characters" ? "clicked" :""}>CHARACTERS</Link>
            </div>
        </nav>
    )
}