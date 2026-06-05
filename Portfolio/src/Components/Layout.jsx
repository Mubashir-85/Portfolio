import React from 'react'
import NavbarPages from './Pages/Navbar/NavbarPages'
import { Outlet } from 'react-router-dom'
import HeroPage from './Pages/Hero/HeroPage'
import FooterPage from './Pages/Footer/FooterPage'

function Layout() {
  return (
    <>
    <NavbarPages/>
    <Outlet/>
    <FooterPage/>
    
    </>
  )
}

export default Layout