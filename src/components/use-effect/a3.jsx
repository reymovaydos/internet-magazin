import React, { useEffect, useState } from "react"
import axios from "axios"
import { apiURL2 } from "../api/api";
export const A3 = () => {
    const [reqres, setReqres] = useState([]);
    useEffect(() => {
        axios.get(apiURL2)
        .then(res => setReqres(res.data.data))
        .catch(err => console.log(err));
    }, [])
    return(
        <div>
            {
                reqres.map((item, keys) => {
                    return(
                        <div key={keys}>
                            <h1>{item.email}</h1>
                            <h2>{item.first_name}</h2>
                            <h3>{item.last_name}</h3>
                            <img src={item.avatar} alt="" />
                        </div>    
                    )
                })
            }
        </div>    
    )
}