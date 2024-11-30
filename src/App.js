import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Play from './pages/Play'
import MovieDiplay from './pages/MovieDiplay';
import Footer from './Components/Footer/Footer';
import Search from './pages/Search';
import './App.css';

import ProductID from './context/ProductID';


function App() {
  return (
    <div className="App">
      



     <ProductID>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/DisplayDetails' element={<MovieDiplay />} />
            <Route path='/play' element={<Play />} />
            <Route path='/search' element={<Search/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
     </ProductID>
     
    </div>
  );
}

export default App;
