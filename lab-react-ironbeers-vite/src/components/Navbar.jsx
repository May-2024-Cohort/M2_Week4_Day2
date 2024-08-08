import { Link } from 'react-router-dom';
import homeIcon from '../assets/home-icon.png'
function Navbar() {
    return(
        <div style={{backgroundColor:"rgb(61,196,252)", width:"100%", display:"flex",justifyContent:"center"}}>
        <Link  to="/">
            <img src={homeIcon} alt="" />
        </Link>
        </div>
       
    )
}

export default Navbar;
