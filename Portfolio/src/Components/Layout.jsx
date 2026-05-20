import React from 'react'
import NavbarPages from './Pages/Navbar/NavbarPages'
import { Outlet } from 'react-router-dom'
import HeroPage from './Pages/Hero/HeroPage'

function Layout() {
  return (
    <>
    <NavbarPages/>
    <Outlet/>
    
    </>
  )
}

export default Layout