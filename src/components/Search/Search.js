import React from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';
function Search(props) {
    if (!props.searchResults || props.searchResults.length === 0) {
        return null;
    }
    return (
        <div className={styles.productSearch}>
            {props.searchResults.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </div>
    );
}
export default Search;
