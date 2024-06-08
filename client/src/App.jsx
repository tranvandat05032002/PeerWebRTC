/* eslint-disable no-unused-vars */
import React from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css'
import HomePage from './pages/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/h' element={<h1>This is home page 2</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App
