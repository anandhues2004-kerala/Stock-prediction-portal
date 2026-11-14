import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faUser, faEnvelope, faLock, faChartLine, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const[success,setSuccess]=useState(false)
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate()

  const handleRegistration = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
  const response = await axios.post(
    'http://127.0.0.1:8000/api/v1/register/',
    { username, email, password }
  )
  console.log(response.data)
    setErrors({})
    setSuccess(true)

    navigate('/login')
  
} catch (error) {
  setSuccess(false)
  if (error.response) {
    setErrors(error.response.data)
  } else {
    setErrors({ error: 'Cannot reach the server' })
  }
} finally {
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
              Smarter market <span className="text-emerald-400">predictions</span>, in one place.
            </h2>
            <p className="mt-4 text-slate-400">
              Create your free account to track stocks and view AI-powered forecasts on your personal dashboard.
            </p>
          </div>

          <ul className="mt-10 space-y-4 text-sm text-slate-300">
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
              Personal dashboard for your predictions
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Free to join, no card needed
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <form
          className="p-8 sm:p-10"
          onSubmit={handleRegistration}
        >
          <h1 className="text-3xl font-bold text-white mb-2">Create account</h1>
          <p className="text-slate-400 text-sm mb-8">
            Join Stock Predict and start exploring market insights.
          </p>

          <div className="relative">
            <FontAwesomeIcon icon={faUser} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-slate-800/70 border border-slate-700 text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-slate-800 focus:ring-4 focus:ring-emerald-500/20"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {errors.username && (
            <small className="text-red-400 text-xs block mt-1 mb-3">{errors.username}</small>
          )}

          <div className="relative mt-4">
            <FontAwesomeIcon icon={faEnvelope} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-slate-800/70 border border-slate-700 text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-slate-800 focus:ring-4 focus:ring-emerald-500/20"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && (
            <small className="text-red-400 text-xs block mt-1 mb-3">{errors.email}</small>
          )}

          <div className="relative mt-4">
            <FontAwesomeIcon icon={faLock} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-slate-800/70 border border-slate-700 text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-slate-800 focus:ring-4 focus:ring-emerald-500/20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Use 8+ characters with uppercase, lowercase, a number and a symbol.
          </p>
          {errors.password && (
            <small className="text-red-400 text-xs block mt-1 mb-3">{errors.password}</small>
          )}

          {errors.error && (
            <small className="text-red-400 text-xs block mb-3">{errors.error}</small>
          )}
<button
  type="submit"
  disabled={loading}
  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold p-3 rounded-xl hover:from-emerald-600 hover:to-teal-600 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-emerald-500/25 transition mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
>
  {loading ? (
    <>
      <FontAwesomeIcon icon={faSpinner} spin /> Registering...
    </>
  ) : (
    'Register'
  )}
</button>

{success && (
  <div className="text-center text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl mt-4">
    Registration successful!
  </div>
)}
        

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <a href="/login" className="text-emerald-400 font-medium hover:text-emerald-300 hover:underline transition">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register