import React from 'react'
import Header from '../Components/NavBar/NavBar'
import Filim from '../Components/DisplayFilim/Filim'
function MovieDiplay() {
  return (
    <div>
      <Header/>
      <div className='main-section'>
       <Filim/>
      </div>
    </div>
  )
}

export default MovieDiplay
