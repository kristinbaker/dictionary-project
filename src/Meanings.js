import React from "react";

import Synonyms from "./Synonyms";

export default function Meanings(props){
    return ( 
        <div className="Meanings">
        <h3>
            {props.meanings.partOfSpeech}
        </h3>
        {props.meanings.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                <p> Definition: 
                {definition.definition}
                </p>
                <br />
                <em> Example: 
                {definition.example}
                </em>
                <Synonyms Synonyms={definition.synonyms} />
                </div>
            )
        })}
        </div>
        );}
