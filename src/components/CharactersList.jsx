import { useEffect, useState} from 'react' 
import {getCharacters} from '../services/character'
import Character from './Character'

const CharactersList = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    getCharacters().then(data => setCharacters(data))
  }, [])
  return (
    <div>
      {characters.map(character => (  
        <Character character={character} />
        
      ))}
    </div>
  )
}

export default CharactersList