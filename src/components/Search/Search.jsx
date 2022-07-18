import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <div className='w-1/2'>
      <form className="flex items-center">   
        <label className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            </div>
            <input 
            value={search.toLocaleLowerCase()}
            onChange={e=>setSearch(e.target.value.toLocaleLowerCase())}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" 
            placeholder="Search"
            required/>
        </div>
      </form>
    </div>
  )
}

export default Search