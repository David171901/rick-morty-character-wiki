import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = () => {
    
    let genders = ["female", "male", "genderless", "unknown"];

  return (
    <details >
        <summary  className='bg-blue-100 border-blue-300 border p-4 text-lg font-light'>Gender</summary>
        <div className='flex justify-center items-center flex-wrap p-4'>
            <div className='space-y-5'>
                {genders.map((input,index)=>{
                    return(<FilterBTN 
                        key={index}
                        input={input}
                        index={index}
                        name="gender"/>)
                })}
            </div>
        </div>
    </details>
  )
}

export default Gender