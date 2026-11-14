import React, { useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../componets/Authprovider'

const Header = () => {
  const { isLoggedIn, setLoggedin } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const isOnDashboard = location.pathname === '/dashboard'

  const handlelogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setLoggedin(false)
    navigate('/explore')   // go to home after logout
  }

  return (
    <nav className="bg-slate-950 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left side: Logo */}
        <h1 className="text-2xl font-bold">
          <Link className="text-emerald-400" to="/">Stock Predict</Link>
        </h1>

        <div>
          {isLoggedIn ? (
            <div className="flex items-center gap-6 px-10">
              {/* Hide Dashboard link when already on the dashboard */}
              {!isOnDashboard && (
                <Link
                  className="text-slate-300 hover:text-white transition"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              )}
              <button
                className="text-slate-300 hover:text-white transition"
                onClick={handlelogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                className="text-slate-300 hover:text-white transition"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-lg font-semibold transition"
                to="/register"
              >
                Register
              </Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Header