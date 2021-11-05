import React from "react";

import Meanings from "./Meanings";

import Phonetic from "./Phonetic";

import "./Results.css";


export default function Results(props){

   if (props.results) {
    return ( 
        <div className="results">
        <section>
        <h2 className="word">
            {props.results.word}
         </h2>
        {props.results.phonetics.map(function(phonetic, index){
            return (
                <div key={index}>
                <Phonetic phonetic={phonetic} />
                </div>
            )
        })}
        </section>
       
        <section>
        {props.results.meanings.map(function (meanings, index) {
            return (
                <div key={index}>
                <Meanings meanings={meanings}/>
                </div>
            )
            } )}
            </section>
        </div>
    );
   }
    else { return null;

   }
   
   
}