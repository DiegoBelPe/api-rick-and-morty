import React from 'react'



const NavPage = ({page,setPage}) => {
  return (
    <header className='d-flex justify-content-between align-items-center '
            >
      <p>Page: {page}</p>
      <button
        className='btn btn-danger btn sm'
        onClick={() => setPage(page - 1)}
      
      >
        Anterior: {page - 1}
      </button>
      
      <button className=' btn btn-primary btn sm'
              onClick={() => setPage(page + 1)}
      >
        Siguiente: {page + 1}
      </button>
      
    </header>
  )
}

export default NavPage