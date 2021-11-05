import React from "react";

import "./Synonyms.css";

export default function Synonyms(props){
    if (props.synonyms){
    return (
        <div className="synonyms"> 
            {props.synonyms.map(function(synonym, index){
                return (
                    <span key={index}>
                        <span className="synonyms-list" >{synonym}</span>
                    </span>
                )
                    }
                )}
           </div>
    );
    } else {
        return null; 
    }
}