import React from "react";

import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meanings(props){
    return ( 
        <div className="meanings">
        <h3 className="part-of-speech">
        <em>
            {props.meanings.partOfSpeech}
            </em>

        </h3>
        {props.meanings.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                <div className="definition"> 
                {definition.definition}
                </div>
                <span className="example">
               "{definition.example}"
                </span>
                <br />
                <Synonyms synonyms={definition.synonyms} />
                </div>
            )
        })}
        </div>
        );}
