import React, { useState } from "react";

import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword]= useState("")

    function handleResponse(event){
        event.preventDefault();
        alert (`Searching for the definition of ${keyword}`);
    }

    function handleKeyword(event){
        setKeyword(event.target.value)
    }

    return (

        <div className="Dictionary">
        <form onSubmit={handleResponse} onChange={handleKeyword} > <input className="Search-Form" type="search" placeholder="Search for a word"/> </form>
        </div>
       
    ); 
}