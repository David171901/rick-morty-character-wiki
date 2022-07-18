import React from 'react'

const FilterBTN = ({name,input,index}) => {
  return (
    <div>
      <input
        className="appearance-none"
        type="radio"
        name={name}
        id={`${name}-${index}`}
      />
      <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 "
      for={`${name}-${index}`}>
        <span className='capitalize'>{input}</span>
      </label>
    </div>

  )
}

export default FilterBTN