import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink className="nav-link" to='/'>Home</NavLink>
                <NavLink className="nav-link" to='/users'>Users</NavLink>
                <NavLink className="nav-link" to='/posts'>Posts</NavLink>
                <NavLink className="nav-link" to='/about'>About</NavLink>
                <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
            </nav>
            {/* <h2>NavBar</h2> */}
        </div>
    );
};

export default Header;