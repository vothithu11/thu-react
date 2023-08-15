import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onSearch }) {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(keyword);
        console.log(keyword);
        navigate('/search');
    };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input
                className={styles.searchBtn}
                type="text"
                value={keyword}
                name="search"
                placeholder="Type to search"
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button className={styles.searchBtn2} type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
}

export default SearchBar;
