import React from 'react'
import Home from './Home';
import NestedMenu from './NestedMenu';
import { Outlet } from 'react-router';
function Nested() {
  return (
    <div>
      <Home/>
      <NestedMenu/>
      <Outlet/>
    </div>
  )
}

export default Nested
