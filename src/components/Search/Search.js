import React from 'react';
import styles from './Search.module.scss';
import ProductItem from '../ProductItem/ProductItem';
import { Link } from 'react-router-dom';

function Search(props) {
    if (!props.searchResults || props.searchResults.length === 0) {
        return null;
    }
    const handleLinkClick = () => {
        props.setShowResults(false); // Call the function to update showResults
    };
    return (
        <>
            <div className={styles.productSearch}>
                {props.searchResults.map((product) => (
                    <Link
                        to={`/products/${product.id}`}
                        onClick={handleLinkClick}
                        key={product.id}
                    >
                        <ProductItem product={product} key={product.id} />
                    </Link>
                ))}
            </div>
        </>
    );
}
export default Search;
