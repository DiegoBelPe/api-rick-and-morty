const API_URL = 'https://rickandmortyapi.com/api/character?page=1';


export async function getCharacters() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data.results);
  return data.results; 
}

// llamado por pagina 
export async function getCharacterPage(id) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await response.json();
  return data;
}