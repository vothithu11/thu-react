import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBtn from '../SearchBtn/SearchBtn';

import CartBtn from '../CartBtn/CartBtn';
function Header() {
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
                <Outlet />
                <CartBtn />
            </div>
            <SearchBtn />
        </div>
    );
}

export default Header;
