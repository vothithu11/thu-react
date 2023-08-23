import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Modal from '../../UI/Modal';
import styles from './Cart.module.scss';
import { useDispatch } from 'react-redux';

function Cart(props) {
    const state = useSelector((state) => state);
    var total = 0;
    const dispatch = useDispatch();
    const increment = (product) => {
        dispatch({ type: 'ADD', payload: product });
    };
    const decrement = (product) => {
        dispatch({ type: 'DEL', payload: product });
    };

    const CartList = (product) => {
        const priceProductString = product.price
            .replace(/\./g, '')
            .replace(' đ', '');
        const priceProductNumber = parseInt(priceProductString, 10);
        total = total + priceProductNumber;
        return (
            <div className={styles.productOrder}>
                <img
                    src={product.image}
                    height="250"
                    width="250"
                    alt="hình ảnh"
                />
                <div className={styles.productInfomation}>
                    <div>{product.name} </div>
                    <div>{product.price} </div>
                    <button
                        className={styles.btn}
                        onClick={() => increment(product)}
                    >
                        +
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => decrement(product)}
                    >
                        -
                    </button>
                </div>
            </div>
        );
    };
    return (
        <Modal>
            <div className={styles.cartList}>{state.map(CartList)}</div>
            <div className={styles.cartActions}>
                <ul>
                    <li>Total</li>
                    <li>
                        {total.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </li>
                </ul>
                <button className={styles.btn} onClick={props.onClose}>
                    Close
                </button>
                <button className={styles.btn}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;
