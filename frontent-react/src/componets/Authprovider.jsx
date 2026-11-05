import React, { createContext, useContext, useState } from 'react'

const AuthContext=createContext()
const Authprovider = ({children}) => {
    const[isLoggedIn,setLoggedin]=useState(
        !!localStorage.getItem('accessToken')
    )
   

  return (
   <AuthContext.Provider value={{isLoggedIn,setLoggedin}}>
    {children}

   </AuthContext.Provider>
  )
}

export default Authprovider
export {AuthContext}
