import React from 'react'
import HeaderItem from "./HeaderItem";
import './Main.css'

const HeaderBase = () => {
    return (
        <header className={'header'}>
            <ul className={'header-list'}>
                <li>
                    <HeaderItem link={'ya.ru'} label={'Вход'}/>
                </li>
                <li>
                    <HeaderItem link={'ya.ru'} label={'Регистрация'}/>
                </li>
            </ul>
        </header>
    )
}

export default HeaderBase;