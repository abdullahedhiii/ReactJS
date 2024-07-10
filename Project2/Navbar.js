import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function NavBar()
{
    return(
        <div className="nav-bar">

   
        <div className="header">
            <FontAwesomeIcon className="icon"  icon={faSpotify}></FontAwesomeIcon>
            <p>Spotify</p>
        </div>
        </div>
    )
}