import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Country from '../Country/Country';
import Pagination from '../Pagination/Pagination';


const Countries = () => {
    useTitle('All Countries')

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);





    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                setLoading(false);
            })

    }, []);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentCountries = countries.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (loading) {
        return <h2>Loading...</h2>;
    };




    return (
        <div>
            <h1 data-aos="flip-up" className='text-3xl text-green-700 font-bold my-5 text-center'>Available Countries: {countries.length}</h1>


            <div data-aos="fade-up" data-aos-duration="1500">
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