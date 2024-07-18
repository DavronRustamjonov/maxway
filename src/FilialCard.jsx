import React from 'react'
import './FilialCard.css'
import MaxWay from '/maxway.png'
function FilialCard() {
  return (
    <div className='filial-card'>
      <div className='container filial-card-container'>
        <div className='filial-box'>
            <div className='filial-left'>
<h2 className='filial-title'>MaxWay Magic City</h2>
<p className='filial-text'>Адрес: Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>
<p className='filial-text'>Часы работы: 10:00-03:00</p>
<p className='filial-next-text'>Номер телефона :<span><a className='filial-link' href="#"> +998 91 106 38 98 </a></span></p>
<p className='filial-text'>Ориентир: Magic City</p>
<img src={MaxWay} alt="" class="filial-thumb"></img>
            </div>
            <div className='filial-right'>
            <iframe class="filial-iframe" src="https://yandex.com/map-widget/v1/-/CCUBbKwFsD" frameborder="1" allowfullscreen="true"></iframe>
            </div>

        </div>
        
      </div>
    </div>
  )
}

export default FilialCard
