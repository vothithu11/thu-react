import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar/SearchBar';
import Search from '../Search/Search';
import productLists from '../../Data1';
import { useState } from 'react';
import CartBtn from '../CartBtn/CartBtn';
function Header() {
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (keyword) => {
        const results = productLists.filter((value) =>
            value.name.toLowerCase().includes(keyword.toLowerCase()),
        );
        setSearchResults(results);
    };
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <span>Didongviet</span>
                <ul>
                    <li>
                        <Link to="/" className={styles.navLink} title="Home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products"
                            className={styles.navLink}
                            title="Products"
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className={styles.navLink}
                            title="Login"
                        >
                            <FontAwesomeIcon
                                className={styles.user}
                                icon={faUser}
                            />
                            Login
                        </Link>
                    </li>
                </ul>
                <CartBtn />

                <div className={styles.searchBtn}>
                    <SearchBar onSearch={handleSearch} />

                    <Search searchResults={searchResults} />
                </div>
            </div>
        </div>
    );
}

export default Header;
