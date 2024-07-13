import React from 'react'
import Layout from './Layout';
import Footer from './Footer';
import { Outlet } from 'react-router';
function App() {
  return (
    <div>
      <Layout/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
