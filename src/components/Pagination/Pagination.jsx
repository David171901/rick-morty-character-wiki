import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({setPageNumber,info}) => {

  return (
    <ReactPaginate
      pageCount={info.pages}
      nextLabel='Next'
      previousLabel='Prev'
      className='flex justify-center items-center gap-4 my-4'
      pageClassName='bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
      activeClassName='bg-blue-500'
      nextClassName='border border-blue-600 bg-blue-500 text-white hover:bg-blue-300 rounded-lg leading-tight py-2 px-3'
      previousClassName='border border-blue-600 bg-blue-500 text-white hover:bg-blue-300 rounded-lg leading-tight py-2 px-3'
      onPageChange={(e) => setPageNumber(e.selected + 1)}
    />
  )
}

export default Pagination