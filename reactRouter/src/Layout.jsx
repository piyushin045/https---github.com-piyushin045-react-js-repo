import React from 'react'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import { Outlet } from 'react-router-dom'
// will create a base and will change the thing where we will give outlet

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout