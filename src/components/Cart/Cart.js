import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
function Cart() {
    const state = useSelector((state) => state);
    var total = 0;
    const CartList = (item) => {
        const priceProductString = item.price
            .replace(/\./g, '')
            .replace(' đ', '');
        const priceProductNumber = parseInt(priceProductString, 10);
        total = total + priceProductNumber;
        return (
            <>
                <li>{item.name}</li>
                <li>{item.price}</li>
            </>
        );
    };
    return (
        <div className="footer">
            <ul>
                {state.map(CartList)}
                <li>Total</li>
                <li>
                    {total.toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    })}
                </li>
            </ul>
        </div>
    );
}

export default Cart;
