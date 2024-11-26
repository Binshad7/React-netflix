import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Filim from './Components/DisplayFilim/Filim';
import './App.css';
import  MoviesOrginals from './context/MoviesOrginals';
import  MoviesAction from './context/MoviesAction';


function App() {
  return (
    <div className="App">
      

   <MoviesAction>
    <MoviesOrginals>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/DisplayDetails/:type/:filimID' element={<Filim />} />

          </Routes>
        </BrowserRouter>

    </MoviesOrginals>
   </MoviesAction>
    </div>
  );
}

export default App;
