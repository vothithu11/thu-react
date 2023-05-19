import { useState } from "react";
import styles from "./Login.module.scss";

function Login (){
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    return (
      <div className={styles.container}>
        <img src="https://didongviet.vn/icon/login/loginbg.png" alt=""/>
        <form>
            <input 
            type="text" 
            value={name}
            placeholder="Enter your name"
            onChange={e=>setName(e.target.value)}
            />
           <input 
           type="text" 
           value={phone}
           placeholder="Enter your phone"
           onChange={e=>setPhone(e.target.value)}
           />
            <input 
            type="text" 
            value={email}
            placeholder="Enter your mail"
            onChange={e=>setEmail(e.target.value)}
            />
            <input 
            type="text" 
            value={password}
            placeholder="Enter your password"
            onChange={e=>setPassword(e.target.value)}
            />
          <button>Đăng ký</button>
        </form>
      </div>
      );
}
export default Login;