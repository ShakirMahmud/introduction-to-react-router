import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/users'>Users</Link>
                <Link className="nav-link" to='/about'>About</Link>
                <Link className="nav-link" to='/contact'>Contact Us</Link>
            </nav>
            {/* <h2>NavBar</h2> */}
        </div>
    );
};

export default Header;