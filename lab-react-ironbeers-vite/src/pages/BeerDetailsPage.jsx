import {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
function BeerDetailsPage() {
    const [beer,setBeer] = useState(null)

    const {beerId} = useParams()
    console.log(beerId)
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((oneBeer)=>{
            console.log(oneBeer.data)
            setBeer(oneBeer.data)
        })
        .catch((err)=>{console.log(err)})
    },[beerId])
    return(
        <div>
            {beer && (
                <div>
                    <img id='beer-img' src={beer.image_url} alt="" />
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>


                </div>
            )}
        </div>
    )
}

export default BeerDetailsPage;
