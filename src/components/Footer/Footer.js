import React from 'react';
import styles from './Footer.module.scss';
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.columns}>
                <h4>Company</h4>
                <h6>About</h6>
                <h6>Careers</h6>
                <h6>Mobile</h6>
            </div>
            <div className={styles.columns}>
                <h4>Contact</h4>
                <h6>Help/FAQ</h6>
                <h6>Press</h6>
                <h6>Affilates</h6>
            </div>
            <div className={styles.columns}>
                <h4>More</h4>
                <h6>Airlinefees</h6>
                <h6>Airline</h6>
                <h6>Low fare tips</h6>
            </div>
        </div>
    );
}

export default Footer;
