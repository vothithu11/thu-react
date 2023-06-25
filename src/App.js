import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import React from 'react';
import Search from './components/Search/Search';
import { useState } from 'react';
import './components/Global.scss';

function App() {
    const [search, setSearch] = useState();

    return (
        <div className="App">
            <nav className="header">
                <ul>
                    <li>
                        <Link to="/" className="nav-link" title="Home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products"
                            className="nav-link"
                            title="Products"
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-link" title="Login">
                            Login
                        </Link>
                    </li>
                </ul>
                <Search />
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/search/:keyword" element={<Search />} />
            </Routes>
        </div>
    );
}

export default App;
