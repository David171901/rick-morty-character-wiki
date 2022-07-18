import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = () => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];
  return (
    <details >
        <summary  className='bg-blue-100 border-blue-300 border p-4 text-lg font-light'>Species</summary>
        <div className='flex justify-center items-center flex-wrap p-4'>
            <div className='space-y-5'>
                {species.map((input,index)=>{
                    return(<FilterBTN
                        key={index}
                        input={input}
                        index={index}
                        name="species"/>)
                })}
            </div>
        </div>
    </details>
  )
}

export default Species