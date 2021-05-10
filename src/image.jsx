import React, { useState } from 'react'


export default function ImageInfo({data}) {

    const [show,setShow] = useState(true)

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
