import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Area from '../Area/Area';

const SmallerLithuania = () => {
    useTitle('Smaller Than Lithuania Area')

    const [countries, setCountries] = useState([]);



    useEffect(() => {
        fetch('https://countries-server-three.vercel.app/SmallerLithuania')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setCountries(data))

    }, []);



    return (
        <>
            <h1 data-aos="flip-up" className='text-3xl text-green-700 font-bold my-5 text-center'>Smaller Than Lithuania Area</h1>

            <div data-aos="fade-up" data-aos-duration="1500">
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