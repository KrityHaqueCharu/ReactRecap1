import React from 'react';

const Country = (props) => { //props e ekta object thake always
    console.log(props);
    const {name,population,flag}=props.country;
    const handleAddCountry =props.handleAddCountry;
    const countryStyle ={border: '1px solid red', margin:'10px',padding:'10px'}
    return (
        <div style={countryStyle}>
             {/* <h4>{props.nameeee}</h4>  */}
            {/* <h4>{props.country.name['common']}</h4>
            <p>population : {props.country.population}</p> */}
            <h4>Country name: {name.common}</h4>
            <p>population: {population}</p>
            <p>Shortcut: {flag}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Counrty</button>
        </div>
    );
};

export default Country;