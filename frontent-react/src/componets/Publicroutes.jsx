import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Authprovider'

const Publicroutes = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext)

    return !isLoggedIn ? children : <Navigate to="/dashboard" replace />
}

export default Publicroutes