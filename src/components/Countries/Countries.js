import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Country from '../Country/Country';
import Pagination from '../Pagination/Pagination';


const Countries = () => {
    useTitle('All Countries')

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);



    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => {
                setCountries(data);
                setLoading(false);
            })

    }, []);


    //  Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentCountries = countries.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1 className='text-3xl text-blue-900 font-bold mb-6 text-center'>Available Countries: {countries.length}</h1>

            <div className='m-8'>
                {

                    currentCountries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    ></Country>)
                }
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={countries.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Countries;