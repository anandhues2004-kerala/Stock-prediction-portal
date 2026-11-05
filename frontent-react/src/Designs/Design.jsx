import React from 'react'
import Footer from '../Hederfooter/Footer'
import Header from '../Hederfooter/Header'
import { Outlet } from 'react-router-dom'

const Design = () => {
  return (
    <div>
        <Header/>

       <Outlet/>
       
        <Footer/>
    </div>
  )
}

export default Design