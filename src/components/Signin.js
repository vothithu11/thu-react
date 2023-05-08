import { useState } from "react";
function Signin (){
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [name, setName ] = useState("");
    return (
        <form>
          <label>Enter your name:
            <input 
            type="text" 
            onChange={e=>setName(e.target.value)}
            />
          </label>
          <label>Enter your mail:
            <input 
            type="text" 
            onChange={e=>setEmail(e.target.value)}
            />
          </label>
          <label>Enter your password:
            <input 
            type="text" 
            onChange={e=>setPassword(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      );
}
export default Signin;