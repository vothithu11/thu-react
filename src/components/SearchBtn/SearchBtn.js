import React, { useState } from 'react';
import styles from './SearchBtn.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import Search from '../Search/Search';
import productLists from '../../Data1';

function SearchBtn() {
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const handleSearch = (keyword) => {
        const results = productLists.filter((value) =>
            value.name.toLowerCase().includes(keyword.toLowerCase()),
        );
        setSearchResults(results);
    };
    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {showResults && <Search searchResults={searchResults} />}
        </>
    );
}

export default SearchBtn;
