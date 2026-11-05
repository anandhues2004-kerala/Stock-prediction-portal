import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
        onSubmit={handleRegistration}
      >
        <h1 className="text-2xl font-bold mb-6">Create account</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-lg p-3 mb-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && (
          <small className="text-red-500 block mb-3">{errors.username}</small>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3 mb-1 mt-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <small className="text-red-500 block mb-3">{errors.email}</small>
        )}

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-1 mt-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <small className="text-red-500 block mb-3">{errors.password}</small>
        )}

        {errors.error && (
          <small className="text-red-500 block mb-3">{errors.error}</small>
        )}
<button
  type="submit"
  disabled={loading}
  className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
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
  <div className="text-center text-green-600  p-3 rounded-lg mb-4">
    Registration successful!
  </div>
)}
        

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  )
}

export default Register