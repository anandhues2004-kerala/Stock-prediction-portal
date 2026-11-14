import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Authprovider'

const PrivateRoutes = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext)

    return isLoggedIn ? children : <Navigate to="/explore" replace />
}

export default PrivateRoutes