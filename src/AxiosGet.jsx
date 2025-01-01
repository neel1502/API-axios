import React,{ useEffect, useState } from "react";
import axios from 'axios'; 
const AxiosGet = () => {
    const[userData,setdata]=useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response);
            setdata(response.data)
        })
    },[])
    return(
        <div>
           {userData.map((data) => {
            return(
                <div>{data.name + " -"+ data.email}</div>
            )
           })}
        </div>
    )
}
export default AxiosGet;