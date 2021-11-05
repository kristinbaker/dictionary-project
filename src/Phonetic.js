import React from "react";

import "./Phonetic.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faVolumeDown } from '@fortawesome/free-solid-svg-icons';

export default function Phonetic(props){
    if (props.phonetic) {
        return (
            <div className="phonetic">
                <span className="phonetic-audio">
            
                    {props.phonetic.audio && <a href={props.phonetic.audio} target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faVolumeDown} />  </a>}
                 
                </span>
               <div className="phonetic-text">
                /{props.phonetic.text}/
                </div>
            </div>
         );
    } else {
        return null;
    } 

   }

