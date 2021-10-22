import React from "react";

export default function Meanings(props){
    console.log(props.meanings);
    return ( 
        <div className="Meanings">
        <h3>
            {props.meanings.partOfSpeech}
        </h3>
        {props.meanings.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                <p>
                {definition.definition}
                </p>
                <br />
                <em>
                {definition.example}
                </em>
                

                </div>
            )
        })}
        </div>
        );}
