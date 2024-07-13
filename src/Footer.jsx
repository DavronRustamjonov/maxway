import React from 'react';
import './Footer.css';
import Telegramm from '/telegramm.png';
import Instagramm from '/instagramm.png';
import Youtube from '/youtube.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='container footer__container'>
        <div className='footer__wrapper'>
        <ul className='footer__list'>
         <a href="#" className='footer__logo'>SFood</a> 
         <li className='footer__item'>  <a href="#" className='footer__link'>Home</a></li>
         <li className='footer__item'><a href="#" className='footer__link'>Filiali</a></li>
         <li className='footer__item'><a href="#" className='footer__link'>About</a></li>
         <li className='footer__item'><a href="#" className='footer__link'>Contact</a></li>
         </ul>
      <ul className='footer__list'>  <li className='footer__item'>
        <h2 className='footer__lead'>Присоединяйтесь к нам</h2>
         <ul className='wrapper__list'>
            <li className='footer__next-item'><a href="#" className='footer__next-link'><img  className='footer-pic' src={Telegramm} alt="telegramm icon" /></a></li>
            <li className='footer__next-item'><a href="#" className='footer__next-link'><img  className='footer-pic' src={Instagramm} alt="instagarmm icon" /></a></li>
            <li className='footer__next-item'> <a href="#" className='footer__next-link'><img  className='footer-pic'  src={Youtube} alt="youtube icon" /></a></li>
         </ul>
        </li>
        </ul>
        <ul className='footer__list'>
      <h2 className='footer__lead'>Заказывайте по номеру</h2>
      <a href='tel:+998507030153' className='footer__link'>+998507030153</a>
        </ul>
        </div>
  
   
     
     <hr className='footer__line' />
     <ul className='footer__list-bottom'>
        <li  className='footer__item'>
            <p className='footer__next-text'>© 2020–2022, ООО «IT-TIME», официальный сайт</p>
        </li>
        <li  className='footer__item'>
          <p><a href="https://t.me/davron_rustamjonov" target="_blank" rel="noopener noreferrer" className='footer__next-link'>Developed by Davron</a></p>
        </li>
     </ul>
      </div>
    </div>
  )
}

export default Footer
