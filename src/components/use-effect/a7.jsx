import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { apiURL4 } from "../api/api";

export const A7 = () => {
    const [coindesk, setCoinDesk] = useState([]);
    useEffect(() => {
        fetch(apiURL4,{
            method: 'GET'
        })
        .then(result => console.log())
    }, [])
    return (
        <div>
        </div>
    )
}