import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faUser, faLock, faChartLine, faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Authprovider'

const Login = () => {
  const[username,Setusername]=useState('')
  const[password,Setpassword]=useState('')
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const[error,seterror]=useState('')
  const{isLoggedIn,setLoggedin}=useContext(AuthContext)

  const handleLogin=async (e)=>{
    e.preventDefault()
    setLoading(true)

    const userData={username,password}
    try{
      const response=await axios.post("http://127.0.0.1:8000/api/v1/token/",userData)
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
      setLoggedin(true)
      navigate('/dashboard')

    }catch(error){
      seterror("Invalid Credentials")
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-slate-950 px-4 py-10">
      {/* background glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl"></div>

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-black/50 backdrop-blur lg:grid-cols-2">

        {/* Left: brand panel (desktop only) */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-emerald-600/20 via-slate-900 to-slate-950 p-10 border-r border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <FontAwesomeIcon icon={faChartLine} />
              Stock Predict
            </div>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-white">
              Welcome <span className="text-emerald-400">back</span>.
            </h2>
            <p className="mt-4 text-slate-400">
              Log in to pick up where you left off and view forecasts on your personal dashboard.
            </p>
          </div>

          <ul className="mt-10 space-y-4 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Your saved predictions, ready to view
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Secure login with encrypted passwords
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              One click to your dashboard
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <form className="p-8 sm:p-10 flex flex-col justify-center"
        onSubmit={handleLogin}>
          <h1 className="text-3xl font-bold text-white mb-2">Login</h1>
          <p className="text-slate-400 text-sm mb-8">
            Enter your details to access your account.
          </p>

          <div className="relative mb-4">
            <FontAwesomeIcon icon={faUser} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-slate-800/70 border border-slate-700 text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-slate-800 focus:ring-4 focus:ring-emerald-500/20"
              value={username}
              onChange={(e)=>Setusername(e.target.value)}
            />
          </div>

          <div className="relative mb-4">
            <FontAwesomeIcon icon={faLock} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-slate-800/70 border border-slate-700 text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-slate-800 focus:ring-4 focus:ring-emerald-500/20"
              value={password}
              onChange={(e)=>Setpassword(e.target.value)}
            />
          </div>
           {error &&<div className='text-center text-red-400 bg-red-500/10 border border-red-500/20 text-sm font-medium p-3 rounded-xl mb-4'>{error}</div>}
          <button
  type="submit"
  disabled={loading}
  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold p-3 rounded-xl hover:from-emerald-600 hover:to-teal-600 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-emerald-500/25 transition mt-2
             disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
>
  {loading ? (
    <>
      <FontAwesomeIcon icon={faSpinner} spin />
      Logging in...
    </>
  ) : (
    'Login'
  )}
</button >
          <p className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{' '}
            <a href="/register" className="text-emerald-400 font-medium hover:text-emerald-300 hover:underline transition">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login