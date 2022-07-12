const API_URL = 'https://rickandmortyapi.com/api/character/';


export async function getCharacters() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data.results);
  return data.results; 
}