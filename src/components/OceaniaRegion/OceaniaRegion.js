import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';

const OceaniaRegion = () => {
    useTitle('Oceania Region')

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            const oceaniaCountries = data.filter(country => country.region === 'Oceania');
            setCountries(oceaniaCountries);
            setLoading(false);
        };

        fetchCountries();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }




    return (
        <div>
            
            <h1 className='text-3xl text-blue-900 text-center font-bold mb-6'>Available Oceania Countries: {countries.length}</h1>
            <ul className='m-8'>
           
                {countries.map(country => (
                    <li className='mb-6' key={country.name.common}>{country.name.common}
                     <div className="divider"></div></li>
                ))}
            </ul>
        </div>
    );
};

export default OceaniaRegion;