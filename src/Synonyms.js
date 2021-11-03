import React from "react";

import "./Synonyms.css";

export default function Synonyms(props){
    if (props.synonyms){
    return (
        <div className="synonyms"> 
         
            {props.synonyms.map(function(synonym, index){
                return (
                    <span>
                        <span className="synonyms-list" key={index}>{synonym}</span>
                        {/* <span className="synonyms-list" key={index}>{`${synonym}${index !== props.synonyms.length - 1 ? ', ' : ''}`}</span> */}
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