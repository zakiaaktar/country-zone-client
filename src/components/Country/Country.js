import React from 'react';



const Country = ({ country }) => {
    const { name, region, area } = country;


    return (
        <div>
            <div className="divider"></div>
            <h2>Country Name: {name.common}</h2>
            <h3>Region: {region}</h3>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;