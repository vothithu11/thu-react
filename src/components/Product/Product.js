import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.module.scss';
import ProductLists from '../../Data1';
import { useDispatch } from 'react-redux';

function Product() {
    const { id } = useParams();
    const product = ProductLists.filter((p) => p.id == id)[0];
    console.log(product);
    const dispatch = useDispatch();
    const increment = (product) => {
        dispatch({ type: 'ADD', payload: product });
    };
    const decrement = (product) => {
        dispatch({ type: 'DEL', payload: product });
    };

    return (
        <div className={styles.productList}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2 className={styles.productOldPrice}>{product.price_old} </h2>
            <p>{product.description}</p>
            <button className={styles.btn} onClick={() => increment(product)}>
                Add to Cart
            </button>
            <button className={styles.btn} onClick={() => decrement(product)}>
                DEL to Cart
            </button>
        </div>
    );
}
export default Product;
