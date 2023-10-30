import axios from "axios"
import { useState, useEffect } from "react"
import { apiURL5 } from "../api/api"
export const A8 = () => {
    const [data, setData ] = useState([])
    useEffect(() => {
        axios.get(apiURL5)
        .then((response) => setData(response.data))
    }, [])
    return(
        <div>
            {data.map((item) => {
                return(
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <h2>{item.username}</h2>
                        <h3>{item.email}</h3>
                        <h4>{item.address.city}</h4>
                        <button>Click</button>
                    </div>    
                )
            })}
        </div>    
    )
}