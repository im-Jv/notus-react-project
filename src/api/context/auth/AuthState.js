import { useState } from 'react'
import AuthContext from './authContext'

const AuthState = ({ children }) => {

  const [cUser, setCUser] = useState({});
  // const isAuth = JSON.parse(localStorage.getItem("userIsLogged"))


  const isLogin = (user) => {
    window.localStorage.setItem("userIsLogged", user);
    setCUser(JSON.parse(window.localStorage.getItem("userIsLogged")))
  }

  const isLogout = () => {
    localStorage.clear()
    setCUser(null)
  }

  const values = {
    cUser,
    isLogin,
    isLogout,
    setCUser
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState;
