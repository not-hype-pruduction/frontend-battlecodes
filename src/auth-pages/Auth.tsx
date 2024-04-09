import React from "react";
import global from "../global-static/styles/global.module.css";
import Navbar from "../main/App";
import "./static/Auth.css";

function AuthContainer() {
    return (
        <>
            <div className="login-container">
                <div className="login-block">
                    <span className={global.bigtext}>
                        Войти
                    </span>
                    <input type="email" name="asd" id="email" className="input-f" />
                </div>
            </div>
        </>
    );
}

function Auth() {
    return (
        <>
            <div className={global.container}>
                <Navbar.NavBar></Navbar.NavBar>
                <AuthContainer></AuthContainer>
            </div>
        </>
    );
}

export default Auth;