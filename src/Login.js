import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        //signIn exist user
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();
        //register new user 
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //If Success
                //console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="/images/login_logo.svg" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login__signInButton" type="submit" onClick={signIn} >Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button className="login__registerButton" onClick={register} >Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
