import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Country = (props) => {
    const {name,region} = props.country;
    console.log(props.country);
    const CStyle={
        border:"2px solid black",
        borderRadius:"10px",
        margin:"20px",
        padding:"20px",
        textAlign:"center",
        backgroundColor:"skyBlue"
    }
    const btnStyle={
        padding:"20px",
        backgroundColor:"gold",
        borderRadius:"20px",
        cursor:"pointer"
    }
    return (
        <div style={CStyle}>
            
            <h1>{name}</h1>
            <h2>{region}</h2>
            <Link to={`country/${name}`}>
            <button style={btnStyle}>Click Here For More Info</button>
            </Link>
            
        </div>
    );
};

export default Country;