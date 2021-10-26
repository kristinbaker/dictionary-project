import React from "react";

export default function Phonetic (props){
    console.log(props.phonetic);
    if (props.phonetic) {
        return (
            <div className="Phonetic">
                <div className="Phonetic-audio">
                <a href={props.phonetic.audio} target="_blank"> Listen here </a>
                </div>
                <div className="Phonetic-text">
                {props.phonetic.text}
                 </div>
         </div> );
    } else {
        return null
    }
}