import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Pagination from './components/Pagination/Pagination';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';

function App() {

  const [pageNumber,setPageNumber] = useState(1);
  const [characters,setCharacters] = useState([]);
  const [info,setInfo] = useState(0);
  const [search,setSearch] = useState('');


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`)
    .then(response => response.json())
    .then(data => {
      if(data.error){
        setCharacters([]);
      }else{
        setCharacters(data.results)
        setInfo(data.info)
      }
    })
  }, [pageNumber,search]);

  
  return (
    <div className="App">
      <div className="container mx-auto space-y-10">
        {/* TITTLE */}
        <div className='space-y-10'>
            <h1 className="text-4xl text-center font-semibold">
              Rick & Morty <span className="text-blue-500">Wiki</span>
            </h1>
            <div className='flex justify-center items-center w-full'>
              <Search
              search={search}
              setSearch={setSearch}
              />
            </div>
        </div>
        {/* CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <div className="w-full h-96">
            <Filters/>
          </div>
          <Cards characters={characters}/>
        </div>
        {/* FOOTER */}
        <div>
          <Pagination
          pageNumber = {pageNumber}
          setPageNumber = {setPageNumber}
          info={info}/>
        </div>
      </div>
    </div>
  );
}

export default App;