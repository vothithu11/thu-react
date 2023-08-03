import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { Link, useNavigate } from 'react-router-dom';

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
        <div className={styles.searchBar}>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={keyword}
                        name="search"
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    );
}

export default SearchBar;
