import { Routes, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Products from './components/Products/Products';   
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import React from 'react';
import { useState } from 'react';
import  './components/Global.css';


function App() {
  
  return (
    <div className="App">
      <nav className="header">
        <ul>
          <li>
            <Link to ='/' className="nav-link">Home</Link>
          </li>
          <li>
            <Link to ='/products' className="nav-link">Products</Link>
          </li>
          <li>
            <Link to ='/login' className="nav-link">Login</Link>
          </li>
         
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products/:id' element={<Product/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
