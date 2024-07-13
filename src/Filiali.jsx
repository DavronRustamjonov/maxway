import React from 'react';
import './Filiali.css';
function Filiali() {
  return (
    <div className='filiali'>
      <div className='container filiali__container'>
       <a className='filiali-link' href="#" target="_blank" rel="noopener noreferrer"><ul className='filiali__list'>
          <li className='filiali__item'>
            <h2 className='filiali__title'>MaxWay Magic City</h2>
             
            <p className='filiali__text'>Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>

          </li>
          <li className='filiali__item'>
            <p className='filiali__next-text'>Часы работы</p>
            <p className='filiali__text'>10:00-03:00</p>
          </li>
        </ul>
        </a> 
        
       <a className='filiali-link' href="#" target="_blank" rel="noopener noreferrer"> <ul className='filiali__list'>
        <li className='filiali__item'>
            <h2 className='filiali__title'>MaxWay Tashkent City</h2>
             
            <p className='filiali__text'>Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>

          </li>
          <li className='filiali__item'>
            <p className='filiali__next-text'>Часы работы</p>
            <p className='filiali__text'>10:00-03:00</p>
          </li>
        </ul>
        </a>
        <a className='filiali-link' href="#" target="_blank" rel="noopener noreferrer"><ul className='filiali__list'>
        <li className='filiali__item'>
            <h2 className='filiali__title'>MaxWay Chilanzar City</h2>
             
            <p className='filiali__text'>Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>

          </li>
          <li className='filiali__item'>
            <p className='filiali__next-text'>Часы работы</p>
            <p className='filiali__text'>10:00-03:00</p>
          </li>

        </ul>
        </a>
      </div>
    </div>
  )
}

export default Filiali
