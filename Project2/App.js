import React from "react";
import Artists from "./data.js"
import Artist from "./Artist.js"

export default function App()
{
    const blocks = Artists.map(
        person => (
            <Artist 
              {...person}
            />
        )
    )
    return(
           <div className="container"> {blocks} </div>
    )
}