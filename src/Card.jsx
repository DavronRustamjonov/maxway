import './Card.css'
import React from 'react'
const Card = ({data}) => {
  return (
    <div className='container'>
      <div className='card-container'>
        <div className='card-box'>
            <img className='card-pic' src={data.img} alt=""/>
            <h3 className='card-title' >{data.title}</h3>
            <p className='card-text'>{data.text}</p>
            <div className='card-wrap'>
                <p className='card-name'>{data.price}  сум</p>
                <button className='card-button'>Заказат</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card