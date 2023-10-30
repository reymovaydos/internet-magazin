import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"
import { apiURL3 } from "../api/api";
export const A6 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(apiURL3)
        .then((response) => setData(response.data))
    }, [])
    return(
        <div>
            {data.map((item) => {
                return(
                    <div key={item}>
                        <h1>{item.name}</h1>
                        <a href={item.web_pages}>Link</a>
                    </div>    
                )
            })}
        </div>    
    )
}