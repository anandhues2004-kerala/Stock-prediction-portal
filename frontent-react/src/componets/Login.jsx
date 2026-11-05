import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-lg p-3 mb-4"
          value={username}
          onChange={(e)=>Setusername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-4"
          value={password}
          onChange={(e)=>Setpassword(e.target.value)}
        />
         {error &&<div className='text-center text-red-500 font-semibold'>{error}</div>}
        <button
  type="submit"
  disabled={loading}
  className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 
             disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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


    

        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="/register" className="text-indigo-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  )
}

export default Login