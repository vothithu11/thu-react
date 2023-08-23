import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBtn from '../SearchBtn/SearchBtn';

import CartBtn from '../CartBtn/CartBtn';
function Header(props) {
    const [showResults, setShowResults] = useState(true);
    const handleLinkClick = () => {
        setShowResults(!showResults);
    };
    const handleLinkClick2 = () => {
        setShowResults(true);
    };
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <span>
                    <Link to="/" title="Title" className={styles.title}>
                        Didongviet
                    </Link>
                </span>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={styles.link}
                            title="Home"
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products"
                            className={styles.link}
                            title="Products"
                            onClick={handleLinkClick}
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className={styles.link}
                            title="Login"
                            onClick={handleLinkClick}
                        >
                            <FontAwesomeIcon
                                className={styles.user}
                                icon={faUser}
                            />
                            Login
                        </Link>
                    </li>
                    <CartBtn onClick={props.showCartBtn} />
                </ul>
            </div>
            <SearchBtn showResults={showResults} onClick={handleLinkClick2} />
        </div>
    );
}

export default Header;
