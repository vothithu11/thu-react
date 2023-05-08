import { useState } from "react";

function Lognin (){
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    return (
        <form>
          <label>Enter your mail:
            <input 
            type="text" 
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
          </label>
          <label>Enter your password:
            <input 
            type="text" 
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      );
}
export default Lognin;