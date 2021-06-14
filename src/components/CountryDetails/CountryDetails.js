import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} =useParams();
    
    const [country,setCountry]=useState([])
    useEffect(()=>{
        const url=`https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data[0]))
    },[])
    const CDStyle={
        border:"2px solid black",
        borderRadius:"10px",
        margin:"20px",
        padding:"20px",
        textAlign:"center"
    }

    return (
        <div  style={CDStyle}>
            <h1>{country.name}</h1>
            <h2>Population : {country.area}</h2>
             <h2>capital : {country.capital}</h2>
            <img style={{height:"300px",width:"400px"}} src={country.flag} alt="" srcset="" />
        </div>
    );
};

export default CountryDetails;