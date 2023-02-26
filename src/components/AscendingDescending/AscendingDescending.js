import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Sortable from '../Sortable/Sortable';




const AscendingDescending = () => {
    useTitle('Ascending / Descending')

    const [countries, setCountries] = useState([]);
    const [isAsc, setIsAsc] = useState(true);



    useEffect(() => {
        fetch(`http://localhost:4000/countries?order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setCountries(data))

    }, [isAsc]);




    return (
        <div>

            <div className='text-center'>
                <h1 className='text-3xl text-blue-900 font-bold mb-6'>Sortable alphabetically by name (ascending, descending)</h1>
                <button className='btn btn-outline btn-success px-10 font-bold' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            </div>
            <div className='countries-container m-8'>
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