import React from "react";

export default function Synonyms(props){
    if (props.Synonyms){
    return (
        <div className="Synonyms">
            {props.Synonyms.map(function(synonyms, index){
                return (
                    <ul key={index}>
                        Synonyms:
                        <li>{synonyms}</li>
                    </ul>
                );
            }
            )
        }
        </div>

    );
    } else {
        return null; 
    }
}