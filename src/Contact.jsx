import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact'>
      <div className='container contact-container'>
      <div className='contact-top'>
       
        <h3 className='contact-title'>Телефоны контактных центров</h3>
         <p className='contact-text'>Круглосуточно, без выходных</p>

         <ul className='contact-list'>

          <li className='contact-item'>
            <p className='contact-text'>Ташкент</p>
          </li>
          <li className='contact-item'>
           <a href="tel:+998507030153" className='contact-link' >+998507030153</a>
          </li>

         </ul>

         <ul className='contact-list'>

          <li className='contact-item'>
            <p className='contact-text'>Наманган</p>
          </li>
          <li className='contact-item'>
           <a href="tel:+998507030153" className='contact-link'>+998507030153</a>
          </li>

         </ul>


         <ul className='contact-list'>

          <li className='contact-item'>
            <p className='contact-text'>Алмалык</p>
          </li>
          <li className='contact-item'>
           <a href="tel:+998507030153" className='contact-link' >+998507030153</a>
          </li>

         </ul>


     



      </div>
      <div className='contact-middle'>
     
         <h3 className='contact-title'>Отдел поддержки клиентов</h3>
         <ul className='contact-list'>
          <li className='contact-item'><p className='contact-text'>Электронная почта</p></li>
          <li className='contact-item'><a className='contact-next-link' href="http://rustamjonovdavron76@gmail.com">rustamjonovdavron@gmail.com</a></li>
         </ul>
        <ul className='contact-list'>

        <li className='contact-item'><p className='contact-text'>Контактный телефон</p></li>
        <li className='contact-item'><p className='contact-text'><a className='contact-next-link' href="tel:+998911063898">+998911063898</a></p></li>     
        
        </ul>
      </div>
      <div className='contact-bottom'>
     
      <h3 className='contact-title'>Правообладателям</h3>
         <p className='contact-text'>По вопросам, возникшим в связи с предположительным неправомерным
          использованием товарных знаков, логотипов и иных материалов, просим обращаться по е-мейлу с приложением подтверждающих документов</p>

         <ul className='contact-next-list'>

          <li className='contact-item'>
            <p className='contact-text'>Электронная почта</p>
          </li>
          <li className='contact-item'>
          <a className='contact-next-link' href="http://rustamjonovdavron76@gmail.com">rustamjonovdavron@gmail.com</a>
          </li>

         </ul>

       
      </div>
      </div>

    </div>
  )
}

export default Contact
