import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'
import Login from '../../pages/Login'
import Settings from '../../pages/Settings'
import SignUp from '../../pages/Signup'
import Profile from '../../pages/Profile'

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path='/' Component={App} />
      <Route path='/settings' Component={Settings} />
      <Route path='/login' Component={Login} />
      <Route path='/signup' Component={SignUp} />
      <Route path='/profile' Component={Profile} />
    </Routes>
  )
}
