import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import { Link } from "react-router-dom";
import './style.css'

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <Link to="/">
                        DSMovie
                    </Link>
                    <a href="https://github.com/hellenapaiva" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/hellenapaiva</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;

