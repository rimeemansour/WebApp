import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

 const Login = () => {

    const {loading, error} = useSelector((state) => state.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const token_expires_in = '30m';

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredentials = {
            email, password,token_expires_in,
        }
        dispatch(loginUser(userCredentials)).then((result)=> {
            if (result.payload) {
                setEmail('');
                setPassword('');
                navigate('/');
            }
        })
    }
    const handleSignUpClick = () => {
        navigate('/regiter');
    };


    return (
        <div>
        <form onSubmit={handleLoginEvent}>
            <label>Email</label>
            <input type='email' 
                   required 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)}
                   />
            <br />
            <label>Password</label>
            <input type='password' 
                   required
                   value={password} 
                   onChange={(e) => setPassword(e.target.value)}
                   />
            <br />
            <button type='submit' > 
              {loading? 'Loading...' : 'Login'}
            </button>
            {error&&(
                <div role='alert'>{error}</div>

            )}
            <br />
        </form>
        <button type='submit' onClick={handleSignUpClick} >Sign Up</button>
        </div>
    )
};


export default Login;