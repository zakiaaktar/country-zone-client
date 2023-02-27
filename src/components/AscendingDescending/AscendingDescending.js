import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Sortable from '../Sortable/Sortable';




const AscendingDescending = () => {
    useTitle('Ascending / Descending')

    const [countries, setCountries] = useState([]);
    const [isAsc, setIsAsc] = useState(true);



    useEffect(() => {
        fetch(`https://countries-server-three.vercel.app/countries?order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setCountries(data))

    }, [isAsc]);




    return (
        <div>

            <div className='text-center'>
                <h1 data-aos="flip-up" className='text-3xl text-green-700 font-bold my-5'>Sortable alphabetically by name (ascending, descending)</h1>
                <button className='btn btn-outline rounded-full btn-success px-10 font-bold' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
                {

                    countries.map(country => <Sortable
                        country={country}
                        key={country.cca3}
                    ></Sortable>)
                }

            </div>

        </div>
    );
};

export default AscendingDescending;