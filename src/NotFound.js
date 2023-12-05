import {Link} from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Atsiprasome</h2>
            <p>Sio puslapio nesuradome.</p>
            <Link to='/'>rizti i pradini puslapi</Link>G

        </div>
     );
}
 
export default NotFound;