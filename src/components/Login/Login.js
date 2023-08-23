import React, { useState } from 'react';
import styles from './Login.module.scss';
import { GoogleLogin } from 'react-google-login';

function Login() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const responseGoogle = (response) => {
        console.log(response);
    };
    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src="https://didongviet.vn/icon/login/loginbg.png"
                alt=""
            />
            <form className={styles.form}>
                <input
                    type="text"
                    value={phone}
                    placeholder="Enter your phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    value={email}
                    placeholder="Enter your mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.submitBtn}>Đăng ký</button>
                {/* <button className={styles.googleLogin}> */}
                <GoogleLogin
                    clientId="589967033121-jp2guvboikmr6miu6gs9h23qf3fhbr4k.apps.googleusercontent.com"
                    buttonText="Login in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                {/* </button> */}
            </form>
        </div>
    );
}
export default Login;
