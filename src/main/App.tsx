import React, { useEffect, useMemo, useState, useCallback } from "react";
import logo from '../global-static/logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Particles from "../components/particles";
import proger from "../global-static/assets/proger.svg";


function NavBar() {
  return (
    <>
      <div className='nav-container'>
        <img src={logo} alt="logo" className='logo' />
        <NavButton text='Главная' to="/"></NavButton>
        <NavButton text='Игры' to='/game'></NavButton>
        <AuthButton to='/login'></AuthButton>
      </div>
    </>
  );
}

function NavButton({text, to}: {text: string, to: string}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <>
      <button className='nav-button' type='button' onClick={handleClick}>
        <p className='button-text'>
          {text}
        </p>
      </button>
    </>
  )
}

function AuthButton({to}: {to: string}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  }
  
  return (
    <>
      <button className='auth-button' type='button' onClick={handleClick}>
        <p className='button-text'>
          Войти
        </p>
      </button>
    </>
  )
}

function WhiteButton({text, to}: {to: string, text: string}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  }
  
  return (
    <>
      <button className='white-button' type='button' onClick={handleClick}>
        <p className='button-text'>
          {text}
        </p>
      </button>
    </>
  )
}

function MainContainer() {
  return (
    <>
      <div className='main-info-container'>
        <div className='main-info-block'>
          <span className="main-text">
            Battlecodes
          </span>
          <span className="sub-text">
          Присоединяйтесь к группам и участвуйте в турнире процедур! Продемонстрируйте свои навыки, создавая алгоритмы для различных игр :)
          </span>
        </div>
        <div className="sub-info-block">
          <img src={proger} alt="logo" className='logo' />
          <div className="sub-centred-container">
            <span className="main-motivation-text">
              У нас можно!
            </span>
            <span className="sub-motivation-text">
              Развить и отточить свои навыки в программировании, улучшить смекалку и прокачать алгоритмическое мышление
            </span>
            <div className="centred-container">
              <WhiteButton text="Зарегистрироваться" to="/register"></WhiteButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


const App = () => {
  return (
    <>
      <div className='main-container'>
        <NavBar></NavBar>
        <MainContainer></MainContainer>
      </div>
    </>
  );
}

export default {App, NavBar};
