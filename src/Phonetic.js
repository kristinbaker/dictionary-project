import React from "react";

import "./Phonetic.css";

export default function Phonetic (props){
    if (props.phonetic) {
        return (
            <div className="phonetic">
                <div className="phonetic-text">
                /{props.phonetic.text}/
                 </div>
                 <div className="phonetic-audio">
                <a href={props.phonetic.audio} target="_blank" rel="noreferrer" > audio image  </a>
                </div>
         </div> );
    } else {
        return null
    }
}