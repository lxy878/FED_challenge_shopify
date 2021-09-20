import React, {useState, useEffect} from "react";
import CardComponent from './CardComponent'


export default function Action() {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const api= "ZCcyJ6IFyddIF9icdsN5TTqgWC2NgK5LSG9w34SA"
    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${api}&&count=10`)
        .then(resp=>resp.json()).then(json=>{
            setIsLoaded(true)
            setData(json)
        })
    }, []);
    return (!isLoaded)? <div>Loading...</div>:(<>{data.map((d,i)=><CardComponent key={i} imageData={d}/>)}</>)
}