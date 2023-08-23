import React, { useState } from 'react';
import styles from './Products.module.scss';
import productLists from '../../Data1';
import CategoryLists from '../../Data2';
import ProductItem from '../ProductItem/ProductItem';
import { Link } from 'react-router-dom';

function Products() {
    const [filteredProducts, setFilteredProducts] = useState(productLists);
    const filterEvenProducts = (menu, id) => {
        const filteredProducts = productLists.filter(
            (item) => item.category_id === menu.id,
        );
        setFilteredProducts(filteredProducts);
    };
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredProducts.slice(startIndex, endIndex);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    var myArr = [];
    for (let i = 0; i < totalPages; i++) {
        myArr.push(i);
    }

    return (
        <>
            <div className={styles.menuProduct}>
                <button
                    className={styles.menuProductALL}
                    onClick={() => setFilteredProducts(productLists)}
                >
                    ALL
                </button>
                {CategoryLists.map((menu) => (
                    <button
                        key={menu.id}
                        onClick={() => filterEvenProducts(menu)}
                    >
                        {menu.name}
                    </button>
                ))}
            </div>
            <div className={styles.products}>
                {currentData.map((product) => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductItem product={product} key={product.id} />
                    </Link>
                ))}
            </div>
            <div className={styles.pagination}>
                <button className={styles.paginationBtn}>&laquo;</button>
                {Array.from(myArr, (index) => index + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        disabled={currentPage === pageNumber}
                        className={styles.paginationBtn}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button className={styles.paginationBtn}>&laquo;</button>
            </div>
        </>
    );
}
export default Products;
