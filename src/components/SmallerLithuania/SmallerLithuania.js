import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Area from '../Area/Area';

const SmallerLithuania = () => {
    useTitle('Smaller Lithuania Area')

    const [countries, setCountries] = useState([]);





    useEffect(() => {
        fetch('http://localhost:4000/SmallerLithuania')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setCountries(data))

    }, []);



    return (
       <>
        <h1 className='text-3xl text-blue-900 font-bold mb-6'>Smaller Lithuania Area</h1>
       
       <div className='m-8'>
           {

               countries.map(country => <Area
                   country={country}
                   key={country.cca3}
               ></Area>)
           }
       </div>
       </>
       
    );
};

export default SmallerLithuania;