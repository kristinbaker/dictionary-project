import React, { useState } from "react";

import axios from "axios";

import "./Dictionary.css"

import Results from "./Results";

export default function Dictionary(){
    let [keyword, setKeyword]= useState("")
    let [results, setResults]=useState(null)


    function handleResponse(response){
        console.log(response.data);
        setResults(response.data[0]);
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

        <div className="search">
        <div className="search-container">
        <form onSubmit={search} onChange={handleKeyword} > <input className="search-form" type="search" placeholder="Search for a word"/> 
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        </form>
        </div>
        <Results results={results} /> 
        </div>
       
    ); 
}