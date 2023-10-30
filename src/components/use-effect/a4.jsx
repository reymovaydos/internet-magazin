import { useState } from "react"
import { apiURL } from "../api/api"
import { useEffect } from "react";
import axios from "axios";
export const A4 = () => {
    const [randomuser, setRandomUser] = useState([]);
    useEffect(() => {
        axios.get(apiURL)
        .then(response => setRandomUser(response.data.results))
    }, [randomuser])
    return(
        <div className="A4">
            {
                randomuser.map((item, keys)=> {
                    return(
                        <div key={keys}>
                            <h1>{item.name.title}</h1>
                            <h1>{item.name.first}</h1>
                            <h1>{item.name.last}</h1>
                            <h1>{item.email}</h1>
                            <h4 style={{fontSize: '25px', color: 'red'}}>{item.location.city}</h4>
                            <p style={{fontSize: '25px',}}>{item.location.country}</p>
                            <img src={item.picture.large} alt="" />
                        </div>    
                    )
                })
            }
        </div>    
    )
}