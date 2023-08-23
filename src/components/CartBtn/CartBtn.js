import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import styles from './CartBtn.module.scss';
import { Link } from 'react-router-dom';

function CartBtn(props) {
    const state = useSelector((state) => state);
    return (
        <div className={styles.cartBtn}>
            <Link to="/cart" className={styles.navLink} title="cart">
                <button onClick={props.onClick}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    Cart ({state.length})
                </button>
            </Link>
        </div>
    );
}

export default CartBtn;
