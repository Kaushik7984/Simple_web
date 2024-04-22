// Add this to Navbar.js

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('userToken');
        navigate('/login');
    };

    const isAuthenticated = !!localStorage.getItem('userToken');
    return (
        <nav>
            <Link to="/">Home</Link>
            {isAuthenticated ? (
                <>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    {/* <Link onClick={logout}>Logout</Link> */}
                    <Link ><button className='logout' onClick={logout}>Logout</button></Link>
                    
                </>
            ) : (
                <>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="login">Login</Link>

                </>
            )}


        </nav>
    );
}

export default Navbar;