import React, { useState } from 'react'
import { createContext } from 'react'

export const OriginalsProvider = createContext()

function Movies({children}) {

  const [orginals,setMovie] = useState([]);

  const  OrginalsMovie = (movie)=>{
      setMovie(movie)
  }

    return (
        <div>
          <OriginalsProvider.Provider value={{OrginalsMovie,orginals}}>
             {children}
          </OriginalsProvider.Provider>
        </div>
    )
}

export default Movies
