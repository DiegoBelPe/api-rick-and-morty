import { useEffect, useState} from 'react' 
import Character from './Character'
import NavPage from './NavPage'

const CharactersList = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await res.json()
      setCharacters(data.results)
      setLoading(false)
    }
    fetchData()
  }, [page])
  return (
    <div className='container'>
      <NavPage page={page} setPage={setPage}/>
     {
        loading ? <h1>Loading...</h1> :
          <div className='row'>
          {characters.map(character => { 
          return (
          <div className='col-md-4'>
            <Character key={character.id} character={character} />
          </div>
        ) 
      })}
     </div>
     }
    </div>
  )
}

export default CharactersList