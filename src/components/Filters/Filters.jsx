import React from 'react'
import Gender from './category/Gender'
import Species from './category/Species'
import Status from './category/Status'

const Filters = () => {
  return (
    <div className='w-full space-y-3'>
      <div className='text-center font-semibold text-3xl'>Filters</div>
      <div className='underline text-blue-500 text-center'>Clear Filters  </div>
      <div className="max-w-2xl mx-auto bg-white rounded-xl border border-blue-300">
        <Status/>
        <Species/>
        <Gender/>
      </div>
    </div>
  )
}

export default Filters