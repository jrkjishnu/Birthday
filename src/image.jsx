import React, { useEffect, useState } from 'react'
import Axios from 'axios';

export default function ImageInfo() {

    const [show,setShow] = useState(true)
    const [data,setData] = useState([]);

    useEffect(()=>
    {
        Axios.get("http://localhost:5000/user").then((res)=>
        {
            console.log(res.data);
            setData(res.data);
        })
    },[])

    if(show)
    {
        return (
            <div className="container">
                {
                    data.map((item)=>
                    {
                        return(
                            <div>
                                 <img src={item.img} alt="" height="200px"/>
                                 <h3>{item.name}</h3>
                                 <p>{item.age}</p>
                            </div>
                  
                        )
                    })
                }
                <button onClick={()=>setShow(false)}>Clear All</button>
            </div>
        )
    }
    else
    {
        return(
            <h2>0 birthday today</h2>
        )
    }
}
