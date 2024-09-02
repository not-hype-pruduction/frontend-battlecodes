import React from 'react'
import Slogan from "./Slogan";
import Header from "./Header";
import RegistrationButton from "./RegistrationButton";

const MainScreen = () => {
    return(
        <div className = 'main-screen'>
            <Header/>
            <Slogan/>
            <RegistrationButton/>
        </div>
    )
}

export default MainScreen;