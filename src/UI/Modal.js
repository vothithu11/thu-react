import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
const Backdrop = (props) => {
    return <div className={styles.backdrop} />;
};
const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement,
            )}
        </>
    );
};
export default Modal;
