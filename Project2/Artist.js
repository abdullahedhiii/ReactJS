import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Artist(props)
{
    return(
        <div className="artist-block">
            <div className="image-container">
              <img src={`${process.env.PUBLIC_URL}/images/${props.image}`} alt={`${props.Name} cover`} />
              <button className="play"><FontAwesomeIcon  className="icon" icon={faPlay}></FontAwesomeIcon></button>
              <p className="play-singer">Play {props.Name}</p>
            </div>
            <p className="name">{props.Name}</p>
            <p className="category">{props.Category}</p>   
        
        </div>
    )
}