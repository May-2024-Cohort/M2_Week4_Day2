import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function AddBeerPage() {

    const [name,setName] = useState('')
    const [tagline,setTagline] = useState('')
    const [description,setDescription] = useState('')
    const [firstBrewed,setFirstBrewed] = useState('')
    const [BrewersTip,setBrewersTip] = useState('')
    const [contributedBy,setContributedBy] = useState('')
    const [attenuationLevel,setAttenuationLevel] = useState(0)


    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        let newBeer = {
            name,
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: BrewersTip,
            contributed_by: contributedBy,
            attenuation_level:attenuationLevel
        }
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',newBeer)
        .then(()=>{
            alert("YAY new beer created")

            navigate('/beers')

        })
        .catch((err)=>{console.log(err)})
    }
    return(
        <div>

            <form onSubmit={handleSubmit}>

                <label>
                    Name:
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} />
                </label>

                <label>
                    Tagline:
                    <input type="text" onChange={(e)=>{setTagline(e.target.value)}} />
                </label>

                <label>
                    Description:
                    <textarea type="text" onChange={(e)=>{setDescription(e.target.value)}} />
                </label>

                <label>
                    First Brewed:
                    <input type="date" onChange={(e)=>{setFirstBrewed(e.target.value)}} />
                </label>

                <label>
                    Brewers Tip:
                    <input type="text" onChange={(e)=>{setBrewersTip(e.target.value)}} />
                </label>

                <label>
                    Contributed By:
                    <input type="text" onChange={(e)=>{setContributedBy(e.target.value)}} />
                </label>

                <label>
                    Attenuation Level:
                    <input type="number" value={attenuationLevel} onChange={(e)=>{setAttenuationLevel(e.target.value)}} />
                </label>

                
                <button>Submit</button>
            </form>
        </div>
    )

}

export default AddBeerPage;
