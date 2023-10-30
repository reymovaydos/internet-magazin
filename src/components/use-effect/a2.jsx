import { apiURL1 } from "../api/api";
import { useEffect } from "react";
import { useState } from "react";
export const A2 = () => {
    const [user, setUser] = useState([]);
    const fetchUserData  = () => {
        fetch(apiURL1)
        .then(response => {
            return response.json()    
        })
        .then(data => {
            setUser(data)
        })
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    return(
        <div>
            {user.length > 0 && (
                <div>
                    {user.map(item=> (
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <h2>{item.email}</h2>
                            <li>{item.gender}</li>
                        </div>
                    ))}
                </div>    
            )}
        </div>    
    )
}