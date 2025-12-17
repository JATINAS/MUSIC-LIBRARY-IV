import { Link } from "react-router-dom";

const Header = ({appName}) => {
    return (
        <header>
            <div>
                <h1>{appName}</h1>
                <nav>
                    <Link className="header-nav" to="/" aria-label="Go to Home page">Home</Link>
                    <Link className="header-nav" to="/LoginUser" aria-label="Go to Login page">Login</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;