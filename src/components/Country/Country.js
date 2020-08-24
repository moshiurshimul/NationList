import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, flag, population, region, nativeName, numericCode} = props.countryData
    return (
        <div className="country-list">
            <h3>{name} <span><img src={flag} alt=""/></span></h3>
            <p>{name} capital is {capital}</p>
            <p>Population {population}</p>
            <p>Region: {region} | Native Name: {nativeName} | Numeric Code: {numericCode}</p>
            <button onClick={() => props.handleClick(props.countryData)} className="cuntrybtn">Add To My Visited list</button>
        </div>
    );
};

export default Country;