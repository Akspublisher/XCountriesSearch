import { useEffect } from "react";
import { useState } from "react";
import CountryCard from "./CountryCard";

const ENDPOINT = " https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"


export default function CountriesList() {
    
   const [country, setCountry] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
   
        const responData = async () => {
        try{
        const data =   await fetch(ENDPOINT);
        const resData =  await data.json();
       setCountry(resData);
        
    } catch(error){ 
        console.error("Error fetching data:", error);
    }};
    responData();  
    },[])  
      
    return (
        <div>
            <div style={{textAlign:"center"}}>
        <input type="text" placeholder="Search for Countries..." width={100} />
        <br />
        <hr />
        </div>

          <div          
        style={{
            display: "flex",
            flexWrap: "wrap",
            gap:"4px"
        }}
        >
            {country.map((item) => (<CountryCard name={item.common} abbr={item.common} flag={item.png} />  ))}
            
        </div>
        </div>

    )

}