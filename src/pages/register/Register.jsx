import React from 'react'
import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SMR Social</h3>
                    <span className="loginDesc">Connect With Friends and the Environment Around You. Experience the World</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                    <input placeholder="UserName" type="text" className="loginInput" />
                        <input placeholder="Email" type="email" className="loginInput" />
                        <input placeholder="Password" type="password" className="loginInput" />
                        <input placeholder="Password Again"  type="password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log In To Account</button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
