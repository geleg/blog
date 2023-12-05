import {Link} from  'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Mano tinklarastis</h1>
            <div className="links">
                <Link to="/">Pradinis</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                }}>Naujas irasas</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;