import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import './components/Global.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import ProductLists from './Data1';
import Search from './components/Search/Search';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/products/:id" element={<Product />} />
                <Route path="/search" element={<Search />} />
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />

                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
