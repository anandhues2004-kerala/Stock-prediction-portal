import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main'
import Design from '../Designs/Design'
import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard'
import Authprovider from './Authprovider'

const Approuter = () => {
  return (
    <Authprovider>
    <Routes>
      <Route path='/' element={<Design />}>
        <Route index element={<Main />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
    </Authprovider>
  )
}

export default Approuter