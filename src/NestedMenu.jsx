import React from 'react'
import { NavLink } from 'react-router-dom'
import './NestedMenu.css'

function NestedMenu() {
  return (
    <div>
        <div className='container layout__container'>
        <ul className='layout__list menu'> 
       <li className='layout__item'> <NavLink  className='layout__link' to ="/" active >Lavash</NavLink></li>   
       <li className='layout__item'> <NavLink  className='layout__link' to="/desert" active>Desert</NavLink></li> 
       <li className='layout__item'> <NavLink  className='layout__link' to="/set" active >Set</NavLink></li>   
       <li className='layout__item'> <NavLink  className='layout__link' to="/haggi" active >Haggi</NavLink></li>
        </ul>
        </div>
    </div>
  )
}

export default NestedMenu
