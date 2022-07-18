import React from 'react'

const Cards = ({characters}) => {

    const __characterStatusColor = (character) => {       
        switch (character.status) {
            case 'Alive':
                return 'green'
            case 'Dead':
                return 'red'
            case 'unknown':
                return 'blue'
            default:
                return 'gray'
        }
    }

    if(characters.length !== 0) {
        return (
            <div className="col-span-1 sm:col-span-3 w-full grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {characters.map((character,index) => {
                    return (
                        <div className='relative h-96 border-2 border-blue-600 rounded-xl' key={index}>
                            <div className='h-3/4'>
                                <img src={character.image} alt="" className='w-full h-full rounded-t-xl'/>
                            </div>
                            <div className='h-1/4 p-2'>
                                <h3 className='font-semibold uppercase text-lg truncate whitespace-nowrap'>{character.name}</h3>
                                <h4 className='text-gray-500 font-normal text-base'>Last Location</h4>
                                <p className='font-normal text-lg truncate whitespace-nowrap'>{character.location.name}</p>
                            </div>
                            <div className='absolute top-4 right-2'>
                                <span className={`px-4 py-2 rounded-xl bg-${__characterStatusColor(character)}-500 font-bold text-white`}>
                                    {character.status}
                                </span>
                            </div>
                        </div>
                    )
                })}        
            </div>
          )
    }else{
        return (
        <div className='h-full w-full flex flex-col items-center justify-center col-span-1 sm:col-span-3 space-y-10'>
            <p className='text-3xl font-semibold uppercase'>Data not found</p>
            <img className='w-20' src="https://www.nicepng.com/png/full/4-46003_morty-face-by-kushmastafresh-on-deviantart-clipart-rick.png" alt="" />
        </div>)
    }
}

export default Cards