import React from 'react'
import FilterBTN from '../FilterBTN';

const Status = () => {
    
    let status = ["Alive", "Dead", "Unknown"];

  return (
    <details >
        <summary  className='bg-blue-100 border-blue-300 border p-4 text-lg font-light'>Status</summary>
        <div className='flex justify-center items-center flex-wrap p-4'>
            <div className='space-y-5'>
                {status.map((input,index)=>{
                    return(<FilterBTN 
                        key={index}
                        input={input}
                        index={index}
                        name="status"/>)
                })}
            </div>
        </div>
    </details>
  )
}

export default Status