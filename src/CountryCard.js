import React from "react";
import './CountryCard.css';

export default function CountryCard({ name, abbr, flag }) {
    return (
        <div className="countryCard">

            <img src={flag} alt='Flag of ${abbr}' style={{height:"100px",
            width:"100px"}} />
            <h2>{name}</h2>   
        </div>
    );
}