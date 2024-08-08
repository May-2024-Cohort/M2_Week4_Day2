import { Link } from "react-router-dom";
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'


function HomePage() {

    return(
        <div>
            <Link to="/beers">
                <img src={beers} alt="" />
                <h2>All Beers</h2>
            </Link>
            <Link to="/random-beer">
            <img src={randomBeer} alt="" />
            <h2>Random Beer</h2>
            </Link>
            <Link to="/new-beer">
            <img src={newBeer} alt="" />
            <h2>New Beer</h2>
            </Link>

        </div>
    )
}

export default HomePage;
