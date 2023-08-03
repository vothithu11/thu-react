import React from 'react';
import Products from '../Products/Products';
import styles from './Home.module.scss';

function Home() {
    return (
        <>
            <div className={styles.images}>
                <img
                    src="https://cdn-v2.didongviet.vn/files/banners/2023/5/7/1/1686119813558_khoan_khoan_02.png"
                    alt=""
                />
            </div>
            <Products />
        </>
    );
}
export default Home;
