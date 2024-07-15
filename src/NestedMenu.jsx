import React from 'react'
import { NavLink } from 'react-router-dom'
import './NestedMenu.css'

function NestedMenu() {
  return (
    <div>
        <div className='container nestedMenu__container'>
        <ul className='nestedMenu__list menu'> 
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to ="/" active >Lavash</NavLink></li>   
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/desert" active>Desert</NavLink></li> 
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/set" active >Set</NavLink></li>      
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/haggi" active >Haggi</NavLink></li>      
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/burger" active >Burger</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/pizza" active >Pizza</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/sendvitch" active >Sendvitch</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/donar" active >Donar</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/xotdog" active >Xot-Dog</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/free" active >Free</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/drink" active >Drink</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/salad" active >Salad</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/bread" active >Bread</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/souce" active >Souce</NavLink></li>
        </ul>
        </div>
    </div>
  )
}

export default NestedMenu
