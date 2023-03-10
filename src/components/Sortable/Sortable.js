import React from 'react';

const Sortable = ({ country }) => {
    const { name, region, area } = country;


    return (
        <div>
            <ul>
                <div className="divider"></div>
                <li><h2>Country Name: {name}</h2></li>
            </ul>
            <h3>Region: {region}</h3>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Sortable;