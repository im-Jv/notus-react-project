import React from 'react'
// import { useAuth } from '../../api/hook/useAuth'
import { Navigate } from 'react-router-dom';
export default function ProtectRoute({ children }) {

  const isAuth = JSON.parse(window.localStorage.getItem("userIsLogged"));

  if (!isAuth) {
    return <Navigate to='/login' />
  }
  else {
    return children;
  }
}
