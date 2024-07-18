import React from 'react'
import { NavLink } from 'react-router-dom'
import './NestedMenu.css'

function NestedMenu() {
  return (
    <div>
        <div className='container nestedMenu__container'>
        <ul className='nestedMenu__list menu'> 
    
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to ="/"  >Lavash</NavLink></li>   
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/desert" >Desert</NavLink></li> 
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/set"  >Set</NavLink></li>      
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/haggi"  >Haggi</NavLink></li>      
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/burger"  >Burger</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/pizza"  >Pizza</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/sendvich"  >Sendvitch</NavLink></li>
       

       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/donar"  >Donar</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/xotdog"  >Xot-Dog</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/free"  >Free</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/drink"  >Drink</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/salad"  >Salad</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/bread"  >Bread</NavLink></li>
       <li className='nestedMenu__item'> <NavLink  className='nestedMenu__link' to="/souce"  >Souce</NavLink></li>


        
        </ul>
        </div>
    </div>
  )
}

export default NestedMenu
