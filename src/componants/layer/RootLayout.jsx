import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Banner from '../Banner'
import About from '../About'
import Clients from '../Clients'
import { Work } from '../Work'
import Footer from '../Footer'
import Error from '../page/Error'

const RootLayout = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <Banner/>
        <Clients/>
        <Work/>
        <About/>
        <Outlet/>
        
        <Footer/>

    </div>
  )
}

export default RootLayout