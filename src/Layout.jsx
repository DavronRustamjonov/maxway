import { NavLink } from 'react-router-dom';
import './Layout.css'; 
import Korzinka from '/korzinka-icon.png'; 
import Burger from '/burger.svg'; 
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='layout'>
      <div className='container layout__container'>
        <button className='burger'><img className='burger' src={Burger} alt="burger icon" />
        </button>
        <NavLink className='layout__logo' to="/home">SFood</NavLink>
        <ul className='layout__list menu'>
          <li className='layout__item'> <NavLink className='layout__link' to="/" exact>Home</NavLink></li>
          <li className='layout__item'> <NavLink className='layout__link' to="/filiali">Filiali</NavLink></li>
          <li className='layout__item'> <NavLink className='layout__link' to="/about">About</NavLink></li>
          <li className='layout__item'> <NavLink className='layout__link' to="/contact">Contact</NavLink></li>
        </ul>
        <ul className='layout__list'>
          <li className='layout__item'>
            <img className='korzinka-icon' src={Korzinka} alt="korzinka icon" />
          </li>
          <li className='layout__item'>
            <Button type="primary" onClick={showModal} className='layout__btn'>Voyti</Button>
            <Modal className='layout-modal' visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <h2 className="login-title">Добро пожаловать</h2>
              <p className="login-text">Войдите с вашим номером телефона</p>
              <form action="#">
                <input className="login-input" type="tel" required placeholder="+998931487733" min="3" />
                <button className="login-btn">Войти</button>
                <ul className='login-list'>
                <li className='login-item'>
                  <p className='login-text'><p>У вас нет аккаунта?</p></p>
                </li>
                <li className='login-item'>
                  <button className='login-link'>Регистрация</button>
                </li>
                </ul>
              </form>
            </Modal>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Layout;
