import "./Navbar.css"
import { Link } from "react-router-dom"


export default function Navbar() {
    

    return(
        <nav>
            <div className="logo">
                <Link>LOGO</Link>
            </div>

            <div className="linkDiv">
                <Link>TOP ANIME</Link>
                <Link>TOP MANGA</Link>
                <Link>CHARACTERS</Link>
            </div>
        </nav>
    )
}