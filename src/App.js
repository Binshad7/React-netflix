import React from 'react';
import './App.css';
import {Originals,action} from './urls'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={Originals} title="Netflix Originals"/>
    <RowPost url={action} title="Action" isSmall/>
    
    </div>
  );
}

export default App;
