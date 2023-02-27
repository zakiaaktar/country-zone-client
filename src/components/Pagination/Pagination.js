import React from 'react';




const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    // console.log(paginate);
   
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <div className=''>
            <ul className='pagination m-8'>
                {pageNumbers.map(number => (
                    <div key={number} className='btn-group'>
                        <button onClick={() => paginate(number)}  className='btn mx-2 my-1 p-3 bg-gradient-to-br from-green-500 to-green-700 text-white border border-white cursor-pointer'>
                            {number}
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;