import React, { useEffect, useState } from 'react';
import Area from '../Area/Area';

const SmallerLithuania = () => {
    const [countries, setCountries] = useState([]);





    useEffect(() => {
        fetch('http://localhost:4000/SmallerLithuania')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setCountries(data))

    }, []);



    return (
       <>
        <h1 className='text-3xl font-bold mb-6'>Smaller Lithuania Area</h1>
       
       <div>
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