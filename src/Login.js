import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault()

        // some fancy firebase login shits
    }
    const register = e => {
        e.preventDefault();

        // some fancy firebase register shitss
    }
  return (
    <div className='login'>
        <Link to="/">
            <img className='login__logo' src='https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png'/>
        </Link>
        <div className='login__container'>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text'value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
            </form>

            <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

            <button className='login__registerButton' onClick={register}>Create your amazon account</button>

        </div>

    </div>
  )
}

export default Login