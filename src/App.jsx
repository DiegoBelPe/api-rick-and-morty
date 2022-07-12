import { useEffect, useState} from 'react' 
import {getCharacters} from './services/character'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    getCharacters().then(data => setCharacters(data))
  }, [])

  return (
    <div className="">
      <h1>Api rick and morty</h1>
      {characters.map(character => (  
        <div key={character.id}>
        <h2>{ character.name}</h2>
        <img src={character.image} alt="" />
        </div>
      ))}
    </div>
  )
}

export default App
