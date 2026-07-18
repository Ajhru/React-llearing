import React from "react";
import { useEffect, useState, } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData()



    // method to fecth and dispay api call..................

    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ajhru')
    //         .then(res => res.json())
    //         .then(res => setdata(res))

    // }, [])

    return (
        <>
            <div className="flex item-center flex-wrap gap-2  justify-center bg-orange-500 py-5 ">
                <div> Github followers : {data.followers}
                    <img src={data.avatar_url} alt="gitimg" width={300} />
                </div>
            </div>
        </>
    )
}




// Optimize way to fetch data from api key ........................
export const Gitinfo = async ()=> {

const response = await fetch("https://api.github.com/users/Ajhru")
return response.json()

}