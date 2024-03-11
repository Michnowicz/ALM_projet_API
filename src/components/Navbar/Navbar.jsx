import "./Navbar.css"
import { Link } from "react-router-dom"


export default function Navbar() {
    

    return(
        <nav>
            <div className="logo">
                <Link to="/" className="myAnime">MyAnime</Link>
            </div>

            <div className="linkDiv">
                <Link to="/">TOP ANIME</Link>
                <Link to='/manga'>TOP MANGA</Link>
                <Link>CHARACTERS</Link>
            </div>
        </nav>
    )
}