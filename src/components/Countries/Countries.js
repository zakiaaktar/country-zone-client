import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Pagination from '../Pagination/Pagination';


const Countries = () => {
   
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);







    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => {
                setCountries(data)
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
            <h1 className='text-3xl font-bold mb-6'>Available Countries: {countries.length}</h1>

            <div>
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