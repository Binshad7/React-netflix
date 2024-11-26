import React from 'react'
import { Originals, action } from '../urls'
// import NavBar from './Components/NavBar/NavBar';
import NavBar from '../Components/NavBar/NavBar';
import Banner from '../Components/Banner/Banner';
import RowPost from '../Components/RowPost/RowPost';
function Home() {
    return (
        <div>

            <NavBar />
            <Banner />
            <RowPost url={Originals} title="Netflix Originals" />
            <RowPost url={action} title="Action" isSmall />
        </div>
    )
}

export default Home
