import React from 'react'
import HeaderItem from "./HeaderItem";
import './Main.css'
import HeaderRegister from "./HeaderRegister";
import {Logo} from "./Logo";

const Header = () => {
    return (
        <header className={'header'}>
            <Logo className={'logo'}/>
            <ul className={'header-list'}>
                <li>
                    <HeaderItem link={'ya.ru'} label={'Главная'}/>
                </li>
                <li>
                    <HeaderItem link={'ya.ru'} label={'Игры'}/>
                </li>
                <li>
                    <HeaderItem link={'ya.ru'} label={'О проекте'}/>
                </li>
            </ul>
        </header>
    )
}

export default Header;