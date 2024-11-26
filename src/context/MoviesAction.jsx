import {createContext,useState} from 'react'

export const ActionMovies = createContext()

function MoviesAction({children}) {
    const [actionMovies,setActionMovies] = useState([])
    const ActionMovie =  (movie)=>{
        setActionMovies(movie)
    }
  return (
    <div>
      <ActionMovies.Provider value={{ActionMovie,actionMovies}}>
        {children}
      </ActionMovies.Provider>
    </div>
  )
}

export default MoviesAction
