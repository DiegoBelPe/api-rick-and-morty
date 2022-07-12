import React from 'react'

const Character = ({character}) => {
  return (
    <div key={character.id}>
        <h2>{ character.name}</h2>
        <img src={character.image} alt="" />
    </div>
  )
}

export default Character