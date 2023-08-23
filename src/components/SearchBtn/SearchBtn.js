import React, { useState } from 'react';
import styles from './SearchBtn.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import Search from '../Search/Search';
import productLists from '../../Data1';

function SearchBtn(props) {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (keyword) => {
        const results = productLists.filter((value) =>
            value.name.toLowerCase().includes(keyword.toLowerCase()),
        );
        setSearchResults(results);
        // props.showResults = true;
    };
    return (
        <>
            <SearchBar onSearch={handleSearch} onClick={props.onClick} />

            {props.showResults && <Search searchResults={searchResults} />}
        </>
    );
}

export default SearchBtn;
