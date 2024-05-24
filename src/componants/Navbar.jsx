import React from 'react'
import Container from './layer/Container'
import Listitem from './layer/Listitem'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Container className="px-3 lg:px-0">
        <div className='flex justify-between items-center '>
        <Link>
          <h2 className='lg:py-5 py-2 lg:text-lg text-xs font-Josefin leading-7 font-bold text-[#f2eeee] '>
            {`<Shakhawat Bijoy/>`}
          </h2>
          </Link>

          <ul className='flex items-center lg:gap-x-8 gap-x-4 text-white'>
            <Listitem href="/" text="Home"/>
            <Listitem href="/sdfs" text="Work"/>
            <Listitem href="/fsdsd" text="About"/>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Navbar