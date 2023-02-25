import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
console.log(paginate);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <div key={number} className='btn-group'>
                        <button onClick={() => paginate(number)}  className='btn mx-2 my-1'>
                            {number}
                        </button>
                    </div>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;