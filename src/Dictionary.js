import React, { useState } from "react";

import axios from "axios";

import "./Dictionary.css"

import Results from "./Results";

import Photos from "./Photos";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Dictionary(){
    let [keyword, setKeyword]= useState("")
    let [results, setResults]=useState(null)
    let [photos, setPhotos]= useState(null)
    const pexelsApiKey= `563492ad6f91700001000001e0bd4a191cb54d36b70f521843d338c5`;


    function handlePexelResponse(response){
        setPhotos(response.data.photos);
    }

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }


    function search(event){
        event.preventDefault();
        let apiURL= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`; 
        axios.get(apiURL).then(handleDictionaryResponse); 
        const pexelsApiURL= `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers= { Authorization: `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiURL, {headers : headers}).then(handlePexelResponse); 
    }


    function handleKeyword(event){
        setKeyword(event.target.value)
    }

    return (

        <div className="search">
        <div className="search-container">
        <form onSubmit={search} onChange={handleKeyword} className="search-form" > <input type="search" className="input" placeholder="Search for a word" /> 
        <button className="btn bg-transparent" id="search-button"> <FontAwesomeIcon icon={faSearch} /> </button>
        </form>
        </div>
        <Results results={results} /> 
        <Photos photos={photos} />
        </div>
        
       
    ); 
}