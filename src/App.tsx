import React from 'react';
import './App.css';
import LandingPage from "./Page";
import QuoteDetails from "./component/Quote";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Apology from './Assets/apology.png'

function App() {
  return (
      <>
          <div className="mobile-only ">
              <p className="h-screen flex flex-col justify-center items-center text-center">
                  <img alt={`gd`} src={Apology}/>
                  Please visit this webpage on a desktop for a better viewing experience.</p>
          </div>
          <div className="App desktop-only">
              <BrowserRouter>
                  <Routes>
                      <Route index element={<LandingPage/>}/>
                      <Route path='/edit' element={<QuoteDetails/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
      </>
  );
}

export default App;
