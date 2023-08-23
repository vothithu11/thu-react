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
import { useState } from 'react';
import Search from './components/Search/Search';

function App() {
    const [cartIsShown, SetCartIsShown] = useState(false);
    const showCart = () => {
        SetCartIsShown(true);
    };
    const hideCart = () => {
        SetCartIsShown(false);
    };
    return (
        <div className="App">
            <Header showCartBtn={showCart} />
            <Routes>
                <Route path="/products/:id" element={<Product />} />
                <Route path="/search" element={<Search />} />
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                {cartIsShown && (
                    <Route path="/cart" element={<Cart onClose={hideCart} />} />
                )}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
