import React from 'react'
import './App.css';
// import { BrowserRouter, Route, Router } from 'react-router-dom';
import StoreFront from './Components/StoreFront';


export default function App() {
  return (
  
    // <Router>
    //   <Route path='/' element={<StoreFront/>} />
    //   <Route path="/Products" element={<ProductCards/>} />
    // </Router>
    <StoreFront/>
  )
}
