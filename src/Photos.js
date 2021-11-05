import React from "react";

import "./Photos.css";

export default function Photo (props){

if (props.photos)
   { return (
     <section className="photo">
         <div className="row">
        {props.photos.map(function(photo, index){
               console.log(photo);
        return(
            <div className="col-4" key={index}>
            <a href={photo.src.original} target="_blank" rel="noreferrer">
            <img src={photo.src.landscape} className="img-fluid" alt=""></img>
            </a>

            </div>
            )
        })}
         </div>
     </section>
   );
}
    else { return null; }
}