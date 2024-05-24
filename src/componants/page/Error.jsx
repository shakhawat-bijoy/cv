import React from 'react'
import Container from '../layer/Container'
import Image from '../layer/Image'
import error from '../../assets/error.png'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Error = () => {
  return (
    <div>
      <Container>
            <div className='relative'>
            <Image className="mx-auto" src={error}/>
            </div>
        </Container>
    </div>
  )
}

export default Error