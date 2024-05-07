import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Register = () => {

    const navigate = useNavigate();
    const [name, setName]=useState('');
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const registerHandler=() => {

    }

    return (
        <div>
            <div>
                <h3> Register </h3>
                <label htmlFor="">Name</label>
                <input type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="">Email</label>
                <input type="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="">Password</label>
                <input type="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={registerHandler}>Register</button>
            </div>
        </div>
    )
}

export default Register;