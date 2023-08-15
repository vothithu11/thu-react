import React from 'react';
import styles from './ProductItem.module.scss';

// import { Link } from 'react-router-dom';

function ProductItem(props) {
    return (
        <>
            {/* <Link to={`/products/${props.product.id}`}> */}
            <div key={props.product.id} className={styles.products}>
                <img
                    src={props.product.image}
                    height="250"
                    width="250"
                    alt="hình ảnh"
                />
                <h2>{props.product.name} </h2>
                <p className={styles.productPrice}>{props.product.price} </p>
                <p className={styles.productOldPrice}>
                    {props.product.price_old}{' '}
                </p>
                <button className={styles.productDetails}>Buy now</button>
            </div>
            {/* </Link> */}
        </>
    );
}
export default ProductItem;
