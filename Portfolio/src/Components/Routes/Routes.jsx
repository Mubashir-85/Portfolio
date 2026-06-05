import React from 'react'
import HeroPage from '../Pages/Hero/HeroPage'
import ProjectPages from '../Pages/Project/ProjectPages'
import { Route,Routes } from 'react-router-dom'
import Layout from '../Layout'
import ContactPages from '../Pages/Contact/ContactPages'

function AppRoutes() {
  return (
    <>
      <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HeroPage />} />
          <Route path='/Projects' element={<ProjectPages />} />
          <Route path='/Contact' element={<ContactPages />} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default AppRoutes