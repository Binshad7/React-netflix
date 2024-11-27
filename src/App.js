import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Play from './pages/Play'
import MovieDiplay from './pages/MovieDiplay';
import Footer from './Components/Footer/Footer';
import './App.css';
import  MoviesOrginals from './context/MoviesOrginals';
import  MoviesAction from './context/MoviesAction';
import  SearchContext from './context/searchContext';


function App() {
  return (
    <div className="App">
      

   <MoviesAction>
    <MoviesOrginals>
     <SearchContext>


        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/DisplayDetails/:type/:filimID' element={<MovieDiplay />} />
            <Route path='/play/:movieID' element={<Play />} />

          </Routes>
        </BrowserRouter>
      <Footer/>
     </SearchContext>
    </MoviesOrginals>
   </MoviesAction>
    </div>
  );
}

export default App;
