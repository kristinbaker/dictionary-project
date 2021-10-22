import React, { useState } from "react";

import axios from "axios";

import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword]= useState("")


    function handleResponse(response){
        console.log(response.data[0]);
    }

    function search(event){
        event.preventDefault();
        let apiURL= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`; 
        axios.get(apiURL).then(handleResponse); 
    }


    function handleKeyword(event){
        setKeyword(event.target.value)
    }

    return (

        <div className="Dictionary">
        <form onSubmit={search} onChange={handleKeyword} > <input className="Search-Form" type="search" placeholder="Search for a word"/> </form>
        </div>
       
    ); 
}