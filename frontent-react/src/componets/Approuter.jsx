import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main'
import Design from '../Designs/Design'
import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard'
import OrgDash from './OrgDash'
import Authprovider from './Authprovider'
import PrivateRoutes from './PrivateRoutes'
import Publicroutes from './Publicroutes'

const Approuter = () => {
  return (
    <Authprovider>
      <Routes>
        <Route path='/' element={<Design />}>
          <Route index element={<Main />} />
          <Route path='register' element={<Publicroutes><Register/></Publicroutes>} />
          <Route path='login' element={<Publicroutes><Login/></Publicroutes>}/>
          <Route
            path='explore'
            element={<PrivateRoutes><Dashboard /></PrivateRoutes>}
          />
          <Route
            path='dashboard'
            element={<PrivateRoutes><OrgDash /></PrivateRoutes>}
          />
        </Route>
      </Routes>
    </Authprovider>
  )
}

export default Approuter