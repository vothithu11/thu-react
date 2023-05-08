import { Routes, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';   // nó bị vấn đề ở đây , lúc đầu dợ dùng import Products from './Products'; thì nó đang hiểu là cái Products component bên ngoài (cái mà chồng đã thay đổi thành Products_)
import Home from './components/Home';
import Login from './components/Login';
import React from 'react';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to ='/'>Home</Link>
          </li>
          <li>
            <Link to ='/products'>Products</Link>
          </li>
          <li>
            <Link to ='/login'>Login</Link>
          </li>
         
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
