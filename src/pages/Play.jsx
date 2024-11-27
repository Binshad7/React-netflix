import React from 'react'
import PlayMovie from '../Components/Play/PlayMovie'
import NavBar from '../Components/NavBar/NavBar'
function Play() {
    return (
        <div>
            <NavBar />
            <div className="youtube">
            <PlayMovie />
            </div>
           
        </div>
    )
}

export default Play
